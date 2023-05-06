import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import '../styles/PresentationRequests.css';
import React, { useState, useEffect } from 'react';
import presentation from '../images/presentation.svg';
import MessageLoader from '../components/MessageLoader';
import { getPresentations, deletePresentation } from '../service/api';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

/* Presentation Requests Page */
const PresentationRequests = () => {
    document.title = 'Presentations | NITJ\'s Jobify';
    const [presentations, setPresentations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        getAllPresentations();
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    /* Get all the presentations */
    const getAllPresentations = async () => {
        let response = await getPresentations();
        setPresentations(response.data);
    }

    /* Delete the presentation */
    const deletePresentationDetails = async (id) => {
        await deletePresentation(id);
        getAllPresentations();
    }

    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='text-center mt-4 mb-2'>Presentations</motion.h1>
            <div style={{ display: "flex", flexDirection: "row", fontFamily: "Montserrat, sans-serif" }} className='my-4'>
                <button className="btn btn-primary text-center mx-auto">
                    <NavLink to={`/presentation/addPresentation`} style={{
                        textDecoration: "none", color: "white", fontWeight: "600"
                    }}>
                        Add Presentation Details
                    </NavLink>
                </button>
            </div>
            <br />
            {isLoading ? <MessageLoader /> :
                <>
                    {presentations.length !== 0 ? presentations.map((content) => (
                        <>
                            <div className='presents mt-2'>
                                <div className="rows">
                                    <div className="one">
                                        <Avatar sx={{ bgcolor: 'white', width: 56, height: 56 }} style={{
                                            objectFit:
                                                "contain"
                                        }}>
                                            <img src={content.imgLink} width={40} height={40} alt={content.name + ' Logo'} />
                                        </Avatar>
                                        <h3 className='mt-2'>&nbsp; {content.name}</h3>
                                    </div>
                                    <div className="two">
                                        <h4>{content.year}</h4>
                                    </div>
                                </div>
                                <div className="row1">
                                    <div className="one">
                                        <div>
                                            <h5>
                                                Date & Time: <span>{content.date}</span>
                                            </h5>
                                        </div>
                                        <div>
                                            <h5>
                                                Post Type: <span>{content.postType}</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="one">
                                        <div>
                                            <h5>
                                                Streams:&nbsp;
                                                <span>
                                                    {content.streams.split("-").map((contents) => (
                                                        <>
                                                            {contents}&nbsp;
                                                        </>
                                                    ))}
                                                </span>
                                            </h5>
                                        </div>
                                        <div>
                                            <h5>
                                                Type: <span>{content.type}</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row2">
                                    <h5 style={{ marginLeft: "6px" }}>
                                        Program: <span>{content.program}</span>
                                    </h5>
                                </div>
                                <div className="row2">
                                    <a href={content.pptLink} target='blank'>
                                        <Button variant="contained">
                                            &nbsp; <VideoCameraFrontIcon /> &nbsp; Join Presentation
                                        </Button>
                                    </a>
                                    <Button color='warning' variant='contained'>
                                        <NavLink to={`/presentationEdit/${content._id}`} style={{
                                            textDecoration: "none", color: "white"
                                        }}>
                                            Edit Presentation Details
                                        </NavLink>
                                    </Button>
                                    <Button variant='contained' style={{
                                        textDecoration: "none", color: "white"
                                    }} onClick={() => deletePresentationDetails(content._id)} color='error'>
                                        Delete Presentation Details
                                    </Button>
                                </div>
                            </div>
                        </>
                    )) : <div className='container mt-2'>
                        <img className='mt-2' src={presentation} height="50%" width="50%" alt="No Presentations Found" />
                        <h1 className='text-center'>No Presentations Found Inbox. Please Check Later!!</h1>
                    </div>}
                </>
            }
            <br />
            <br />
            <br />
        </>
    );
}

export default PresentationRequests;