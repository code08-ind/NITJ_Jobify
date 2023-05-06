import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Email.css';
import { motion } from "framer-motion";
import email from '../images/email.svg';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getEmails, deleteEmail } from '../service/api';
import MessageLoader from '../components/MessageLoader';

/* Emails page */
const Emails = () => {
    document.title = 'Emails | NITJ\'s Jobify';
    const [emails, setEmails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        getAllEmails();
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    /* Get all the emails */
    const getAllEmails = async () => {
        let response = await getEmails();
        setEmails(response.data);
    }

    /* Delete the email */
    const deleteEmailDetails = async (id) => {
        await deleteEmail(id);
        getAllEmails();
    }

    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='text-center my-3'>Emails</motion.h1>
            <div style={{ display: "flex", flexDirection: "row", fontFamily: "Montserrat, sans-serif" }} className='my-4'>
                <button className="btn btn-primary text-center mx-auto">
                    <NavLink to={`/email/addEmail`} style={{
                        textDecoration: "none", color: "white", fontWeight: "600"
                    }}>
                        Add Email Details
                    </NavLink>
                </button>
            </div>
            {isLoading ? <MessageLoader /> :
                <>
                    {emails.length !== 0 ? emails.map((email) => (
                        <>
                            <div className="card" data-aos="fade-up" key={email._id}>
                                <h5 className="card-header">
                                    <span style={{ fontWeight: "bold" }}>{email.email}</span>
                                </h5>
                                <div className="card-body">
                                    <div className="row">
                                        <button className="btn btn-warning">
                                            <NavLink to={`/emailEdit/${email._id}`} style={{
                                                textDecoration: "none", color: "white"
                                            }}>
                                                Edit Email
                                            </NavLink>
                                        </button>
                                        <button className="btn btn-danger" onClick={() => deleteEmailDetails(email._id)}>Delete Email</button>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </>
                    )) : <div className='container mt-2'>
                        <img className='mt-2' src={email} height="50%" width="50%" alt="No Messages Found" />
                        <h1 className='text-center'>No Emails Found Inbox. Please Check Later!!</h1>
                    </div>}
                </>
            }
        </>
    );
}

export default Emails;