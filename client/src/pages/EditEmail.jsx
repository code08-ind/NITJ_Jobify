import '../styles/EditEmail.css';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { editEmail, getEmail } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

/* Default value of form input data */
const defaultValue = {
    email: '',
};

/* Edit email page */
const EditEmail = () => {
    document.title = 'Edit Email | NITJ\'s Jobify';
    const [email, setEmail] = useState(defaultValue);
    const [btnText, setBtnText] = useState('Edit Email Details');
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadEmailDetails();
    }, []);

    console.log(email);

    /* Load email details to get email details */
    const loadEmailDetails = async () => {
        const response = await getEmail(id);
        console.log(response);
        setEmail(response.data[0]);
    }

    /* On value change of form data */
    const onValueChange = (e) => {
        setEmail({ ...email, [e.target.name]: e.target.value });
    }

    /* Edit email details function */
    const editEmailDetails = async (e) => {
        e.preventDefault();
        await editEmail(email, id);
        setBtnText('Edited Email!');
        navigate("/email/emails");
    }

    return (
        <div className='containers mt-3'>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='head mt-2'>Edit/Delete Email Details</motion.h1>
            <form onSubmit={(e) => editEmailDetails(e)} method="post">
                <input autoComplete="off" value={email.email} type="text" style={{ color: "black" }} className='dateInp' required name='email' placeholder='Enter Email To Which Alert Needs To Be Sent' onChange={(e) => onValueChange(e)} />
                <button className='add' type='submit'>{btnText}</button>
            </form>
        </div>
    );
}

export default EditEmail;