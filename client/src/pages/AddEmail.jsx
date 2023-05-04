import '../styles/AddEmail.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { addEmail } from '../service/api';
import { useNavigate } from 'react-router-dom';

/* Default value of Form data */
const defaultValue = {
    email: '',
};

/* Add Email Page */
const AddEmail = () => {
    document.title = 'Add Email | NITJ\'s Jobify';
    const [email, setEmail] = useState(defaultValue);
    const [btnText, setBtnText] = useState('Add Email Details');
    const navigate = useNavigate();

    /* On value change function for form input data */
    const onValueChange = (e) => {
        setEmail({ ...email, [e.target.name]: e.target.value });
    }

    /* Add email function */
    const addEmailDetails = async (e) => {
        e.preventDefault();
        await addEmail(email);
        setBtnText('Added Email!');
        navigate("/email/emails");
    }

    return (
        <div className='containers mt-4'>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='head mt-4'>Add Email Details</motion.h1>
            <form onSubmit={(e) => addEmailDetails(e)} method="post">
                <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='email' placeholder='Enter Email To Which Alert Needs To Be Sent' onChange={(e) => onValueChange(e)} />
                <button className='add' type='submit'>{btnText}</button>
            </form>
        </div>
    );
}

export default AddEmail;