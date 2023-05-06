import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Messages.css';
import { motion } from "framer-motion";
import inbox from '../images/inbox.svg';
import React, { useState, useEffect } from 'react';
import MessageLoader from '../components/MessageLoader';
import { getMessages, deleteMessage } from '../service/api';

/* Messages Page */
const Messages = () => {
    document.title = 'Messages | NITJ\'s Jobify';
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        getAllMessages();
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    /* Get all the messages function */
    const getAllMessages = async () => {
        let response = await getMessages();
        setMessages(response.data);
    }

    /* Delete message function */
    const deleteMessageDetails = async (id) => {
        await deleteMessage(id);
        getAllMessages();
    }

    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='text-center mt-4 mb-2'>Messages</motion.h1>
            <br />
            {isLoading ? <MessageLoader /> :
                <>
                    {messages.length !== 0 ? messages.map((message) => (
                        <>
                            <div className="card" data-aos="fade-up" key={message._id}>
                                <h5 className="card-header">
                                    <span style={{ fontWeight: "bold" }}>{message.name}</span>
                                    <span style={{ fontWeight: "bold", color: "rgb(209, 22, 75)" }}>{message.branch}-{message.year}</span>
                                </h5>
                                <div className="card-body">
                                    <h6 id='email'>{message.email}</h6>
                                    <h6>{message.phone}</h6>
                                    <h6 style={{ fontWeight: "bold", color: "rgb(209, 22, 75)" }}>{message.program}</h6>
                                    <p className="card-text">Message Is: <span style={{ color: 'rgb(209, 22, 75)', fontWeight: "600" }}>{message.message}</span></p>
                                    <button className="btn btn-danger" onClick={() => deleteMessageDetails(message._id)}>Delete Message</button>
                                </div>
                            </div>
                            <br />
                        </>
                    )) : <div className='container mt-2'>
                        <img className='mt-2' src={inbox} height="50%" width="50%" alt="No Messages Found" />
                        <h1 className='text-center'>No Messages Found Inbox. Please Check Later!!</h1>
                    </div>}
                </>
            }
            <br />
            <br />
            <br />
        </>
    );
}

export default Messages;