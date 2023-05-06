import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Dashboard.css';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import dashboard from '../images/dashboard.svg';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MessageLoader from '../components/MessageLoader';
import { getCompanies, deleteCompany } from '../service/api';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

/* Dashboard Requests Page */
const DashboardRequests = () => {
    document.title = 'Edit/Delete Companies | NITJ\'s Jobify';
    const [stream, setStream] = useState("");
    const [postTypes, setPostTypes] = useState("");
    const [programs, setPrograms] = useState("");
    const [companies, setCompanies] = useState([]);
    const [companyData, setCompanyData] = useState([]);
    const [btnText, setBtnText] = useState('Delete');
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

    /* Get all Companies */
    const getAllCompanies = async () => {
        let response = await getCompanies();
        setCompanies(response.data);
        setCompanyData(response.data);
    }

    /* Delete company details */
    const deleteCompanyDetails = async (id) => {
        setBtnText('Deleted!');
        await deleteCompany(id);
        getAllCompanies();
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

    /* Handle the programs in Filter */
    const handleChangePrograms = (e) => {
        let programe = e.target.value;
        if (programe === "") {
            setPrograms(programe);
            setCompanies(companyData);
        } else if (programe === "Select Program") {
            setPrograms(programe);
            setCompanies(companyData);
        } else {
            setPrograms(programe);
            setCompanies(companyData.filter((item) => {
                return item.program.indexOf(e.target.value) >= 0;
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
                    transition={{ duration: 0.2 }}>Edit/Delete Company Details</motion.h1>
            </div>
            <div className='filters container mt-2' style={{ height: "90px" }}>
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
                        <select value={programs} onChange={handleChangePrograms}>
                            <option value="Select Program">Select Program</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="M.Tech">M.Tech</option>
                            <option value="MBA">MBA</option>
                            <option value="M.Sc">M.Sc</option>
                        </select>
                    </div>
                </div>
            </div>
            <Stack sx={{ width: '90%' }} spacing={1} style={{ margin: "0 auto" }}>
                <Alert data-aos="flip-up" className='stack' icon={<CalendarMonthIcon fontSize="inherit" />} severity="info" style={{ fontFamily: 'Merriweather, serif' }}>
                    <AlertTitle style={{ fontFamily: 'Cinzel, serif', fontSize: "1.5em" }}>{monthNames[new Date().getMonth()]}, {new Date().getFullYear()}</AlertTitle>
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
                                            Program:
                                            <br />
                                            <span style={{
                                                fontWeight: "bold", textAlign: "center"
                                            }} className='text-center'>{content.program}</span>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Stack direction="row" spacing={1}>
                                            <Button variant="contained" component={Link} color="warning" className='btn' style={{ color: 'white' }} to={`/companyEdit/${content._id}`}>
                                                Edit
                                            </Button>
                                            <Button variant="contained" color="error" className='btn' style={{ color: 'white' }} onClick={() => deleteCompanyDetails(content._id)}>
                                                {btnText}
                                            </Button>
                                            <Button variant="contained" color="success" className='btn' style={{ color: 'white' }}>
                                                <NavLink to={`/company/${content._id}`} style={{ color: 'white', textDecoration: "none" }}>
                                                    View
                                                </NavLink>
                                            </Button>
                                        </Stack>
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

export default DashboardRequests;