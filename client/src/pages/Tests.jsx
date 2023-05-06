import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Test.css';
import test from '../images/test.svg';
import { motion } from "framer-motion";
import { getTests } from '../service/api';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import QuizIcon from '@mui/icons-material/Quiz';
import React, { useState, useEffect } from 'react';
import MessageLoader from '../components/MessageLoader';

/* Tests Page */
const Tests = () => {
    document.title = 'Tests | NITJ\'s Jobify';
    const [tests, setTests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        getAllTests();
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    /* Get all the tests */
    const getAllTests = async () => {
        let response = await getTests();
        setTests(response.data);
    }

    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='text-center mt-4 mb-2'>Company Test Links</motion.h1>
            <br />
            {isLoading ? <MessageLoader /> :
                <>
                    {tests.length !== 0 ? tests.map((content) => (
                        <>
                            <div className='tests1 mt-2'>
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
                                    <a href={content.testLink} target='blank'>
                                        <Button variant="contained">
                                            &nbsp; <QuizIcon /> &nbsp; Take Test
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </>
                    )) : <div className='container mt-2'>
                        <img className='mt-2' src={test} height="50%" width="50%" alt="No Testls Found" />
                        <h1 className='text-center'>No Tests Found Inbox. Please Check Later!!</h1>
                    </div>}
                </>
            }
            <br />
            <br />
            <br />
        </>
    );
}

export default Tests;