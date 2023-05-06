import '../styles/Contact.css';
import { motion } from 'framer-motion';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { addMessage } from '../service/api';
import { useNavigate } from 'react-router-dom';
import MapLoader from '../components/MapLoader';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useState, useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/* Default value for form input data */
const defaultValue = {
    name: '',
    email: '',
    year: '',
    phone: '',
    branch: '',
    message: '',
    program:''
};

/* Contact Page */
const Contact = () => {
    document.title = 'Contact Us | NITJ\'s Jobify';
    const [userMessage, setUserMessage] = useState(defaultValue);
    const [btnText, setBtnText] = useState('Send Message');
    const [visibility, setVisibility] = useState('none');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, []);

    /* On value change of form input data */
    const onValueChange = (e) => {
        setUserMessage({ ...userMessage, [e.target.name]: e.target.value });
    }

    /* Add message function */
    const addMessageDetails = async (e) => {
        e.preventDefault();
        await addMessage(userMessage);
        setBtnText('Message Sent!');
        setVisibility('block');
        setTimeout(() => {
            navigate("/");
        }, 1500);
    }

    return (
        <div className='container3'>
            <div className="contact">
                <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}>Postal Address</motion.h1>
                <motion.p initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}>Dr. B. R. Ambedkar National Institute of Technology Jalandhar
                    N.I.T. Post Office, Jalandhar (Punjab) - 144011
                    India</motion.p>
            </div>
            <div className="row">
                <div className='container1 col-md-6 col-sm-12'>
                    <Stack sx={{ width: '90%' }} spacing={1} style={{ margin: "0 auto" }}>
                        <Alert data-aos="flip-up" className='alert' icon={<CheckCircleIcon fontSize="inherit" />} severity='success' style={{ fontFamily: 'Montserrat, serif', display: visibility }}>
                            <AlertTitle style={{ fontFamily: 'Montserrat, serif', fontSize: "1.2em" }}>Message Sent. You Will Be Contacted Shortly!!</AlertTitle>
                        </Alert>
                    </Stack>
                    <form onSubmit={(e) => addMessageDetails(e)} method='post'>
                        <input autoComplete="off" type="text" name='name' onChange={(e) => onValueChange(e)} placeholder='Enter Your Name' required />
                        <input autoComplete="off" type="email" name='email' onChange={(e) => onValueChange(e)} placeholder='Enter Your Email' required />
                        <input autoComplete="off" type="text" name='year' onChange={(e) => onValueChange(e)} placeholder='Enter Your Batch Passout Year (Eg: 2024)' required />
                        <input autoComplete="off" type="text" name='phone' onChange={(e) => onValueChange(e)} placeholder='Enter Your Contact Number' required />
                        <input autoComplete="off" type="text" name='branch' onChange={(e) => onValueChange(e)} placeholder='Enter Your Stream (Eg: CSE)' required />
                        <select style={{ color: "black" }} value={userMessage.program} required name="program" onChange={(e) => onValueChange(e)}>
                            <option value="Select Program">Select Program</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="M.Tech">M.Tech</option>
                            <option value="MBA">MBA</option>
                            <option value="M.Sc">M.Sc</option>
                        </select>
                        <textarea autoComplete="off" name='message' onChange={(e) => onValueChange(e)} id="msg" cols="40" rows={5} placeholder='Enter Your Message' required />
                        <button className='add' type="submit">{btnText}</button>
                    </form>
                </div>
                <div className="container2 col-md-6 col-sm-12">
                    {isLoading ? <MapLoader /> : (
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.662272085347!2d75.5358439!3d31.395874600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1675325294487!5m2!1sen!2sin" width="600" height="500" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='NIT Jalandhar Map'></iframe>
                    )}
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}

export default Contact;