import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Dashboard.css';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { motion } from "framer-motion";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { getCompanies } from '../service/api';
import dashboard from '../images/dashboard.svg';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MessageLoader from '../components/MessageLoader';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

/* Dashboard of Companies */
const Dashboard = () => {
    document.title = 'Companies Dashboard | NITJ\'s Jobify';
    const [stream, setStream] = useState("");
    const [postTypes, setPostTypes] = useState("");
    const [companies, setCompanies] = useState([]);
    const [companyData, setCompanyData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        getAllCompanies();
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    /* Get all the companies */
    const getAllCompanies = async () => {
        let response = await getCompanies();
        setCompanies(response.data);
        setCompanyData(response.data);
    }

    /* Handle the post type in Filter */
    const handleChangePostType = (e) => {
        let post = e.target.value;
        if (post === "") {
            setPostTypes(post);
            setCompanies(companyData);
        } else if (post === "Select Post Type") {
            setPostTypes(post);
            setCompanies(companyData);
        } else {
            setPostTypes(post);
            setCompanies(companyData.filter((item) => {
                return item.postType.indexOf(e.target.value) >= 0;
            }));
        }
    }

    /* Handle the stream type in Filter */
    const handleChangeStream = (e) => {
        let streams = e.target.value;
        if (streams === "") {
            setStream(streams);
            setCompanies(companyData);
        } else if (streams === "Select Stream") {
            setStream(streams);
            setCompanies(companyData);
        } else {
            setStream(streams);
            setCompanies(companyData.filter((item) => {
                return item.streams.split("-").indexOf(e.target.value) >= 0;
            }));
        }
    }

    /* Month names */
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <>
            <div className="container3 mt-4">
                <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}>Company Dashboard Details</motion.h1>
            </div>
            <div>
                <marquee width="100%" direction="left" height="70px">
                    New Companies Have Come For Hiring For Different Posts And Streams In Institute. Do Check It!!!
                </marquee>
            </div>
            <div className='filters container' style={{ height: "90px" }}>
                <div className="row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="col col-sm-12" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <select value={stream} onChange={handleChangeStream}>
                            <option value="Select Stream">Select Stream</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                            <option value="EE">EE</option>
                            <option value="ICE">ICE</option>
                            <option value="ME">ME</option>
                            <option value="CE">CE</option>
                            <option value="CHE">CHE</option>
                            <option value="TT">TT</option>
                            <option value="BT">BT</option>
                        </select>
                        <select value={postTypes} onChange={handleChangePostType}>
                            <option value="Select Post Type">Select Post Type</option>
                            <option value="Full Time">Full Time</option>
                            <option value="6 Months Intern + FTE">6 Months Intern + FTE</option>
                            <option value="6 Months Internship">6 Months Internship</option>
                            <option value="2 Months Internship">2 Months Internship</option>
                        </select>
                    </div>
                </div>
            </div>
            <Stack sx={{ width: '90%' }} spacing={1} style={{ margin: "0 auto" }}>
                <Alert data-aos="flip-up" className='stack' icon={<CalendarMonthIcon fontSize="inherit" />} severity="info" style={{ fontFamily: 'Merriweather, serif' }}>
                    <AlertTitle style={{ fontFamily: 'Cinzel, serif', fontSize: "1.6em" }}>{monthNames[new Date().getMonth()]}, {new Date().getFullYear()}</AlertTitle>
                    Visiting Companies In This Month - <strong>Check It Out!</strong>
                </Alert>
            </Stack>
            {isLoading ? <MessageLoader /> :
                <Grow in>
                    <Grid className="container1 mt-1" container alignItems="stretch" spacing={3}>
                        {companies.length !== 0 ? companies.map((content) => (
                            <Grid item xs={12} sm={6} lg={4} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} key={content._id}>
                                <Card sx={{ maxWidth: 375 }} className='my-4' data-aos="fade-up">
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: 'white', width: 56, height: 56 }} aria-label="recipe">
                                                <img src={content.logo} width={40} height={40} alt={content.name} />
                                            </Avatar>
                                        }
                                        title={content.types}
                                        subheader={content.year}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        className='imag'
                                        image={content.imgLink}
                                        alt={content.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h4" color="text.secondary" style={{ fontFamily: 'Readex Pro, sans-serif', fontWeight: "600" }}>
                                            {content.name}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {content.desc}
                                        </Typography>
                                        <Typography variant="body1" color="text.success" className='mt-3'
                                            style={{
                                                fontWeight: "bold"
                                            }}>
                                            {content.postType}
                                        </Typography>
                                        <Grow in>
                                            <Grid className="container1 mt-1" container>
                                                {content.streams.split("-").map((contents) => (
                                                    <Grid item xs={12} sm={6} lg={2} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} key={contents}>
                                                        <span className='font-weight-bold mx-1' style={{ color: "#EE0A61" }}>{contents}</span>
                                                        <br />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Grow>
                                        <Typography variant="body1" color="text.success" className='mt-3'>
                                            Last Date-Time To Apply:
                                            <br />
                                            <span style={{
                                                fontWeight: "bold", textAlign: "center"
                                            }} className='text-center'>{content.date}</span>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <span className='text-danger font-weight-bold'>
                                            {content.packages}
                                        </span>
                                        <span className='font-weight-bold'>||</span>
                                        <span className='text-danger font-weight-bold'>
                                            {content.eligibility}
                                        </span>
                                        <Button variant="contained" color="primary" className='btn' style={{ marginLeft: '90px', color: 'white' }}>
                                            <NavLink to={`/company/${content._id}`} style={{ color: 'white', textDecoration: "none" }}>
                                                See Details
                                            </NavLink>
                                        </Button>
                                    </CardActions>
                                </Card>
                                <br />
                            </Grid>
                        )) : <div className='container mt-2'>
                            <img className='mt-2' src={dashboard} height="50%" width="50%" alt="No Messages Found" />
                            <h1 className='text-center'>No Companies Found. Please Check Later!!</h1>
                        </div>}
                    </Grid>
                </Grow>
            }
        </>
    );
}

export default Dashboard;