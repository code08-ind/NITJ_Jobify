import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Carousal.css';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdPeopleAlt } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";

/* Hero, Carousal and CTP Information Component */
const Carousal = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <>
            <div className="containerss" id="us">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >NIT Jalandhar's<br /> <span>Jobify</span></motion.h1>
                <motion.p initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='mt-2'
                    transition={{ duration: 0.5 }} style={{ color: 'grey' }}>A portal by NIT Jalandhar which provides all the information regarding the statistics about <br /> institute's placements and updates students with upcoming opportunities
                    <br/> and also provides students to contact TPO, PRs and IRs.
                    </motion.p>
                <div className="row">
                    <button data-aos="flip-up"
                    ><NavLink to="/about">See About Us</NavLink></button>
                    <button className='main' data-aos="flip-up"><NavLink to="/companies">See Dashboard</NavLink></button>
                </div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 main1" data-aos="fade-up">
                                    <h1>Our vertos glimmer in the world of placement just like <span>fireflies twinkle in the emarald glass.</span></h1>
                                </div>
                                <div className="col-md-7 col-sm-12 main2" data-aos="fade-down">
                                    <img src="https://www.nitj.ac.in/images/slider/02_Placement_Benchmarks_48903.png" alt="Placements At NIT Jalandhar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 main1">
                                    <h1>See the recent data of our <span>placements</span> with prominent companies and how <span>highly our students</span> got placed.</h1>
                                </div>
                                <div className="col-md-7 col-sm-12 main2">
                                    <img src="https://www.nitj.ac.in/images/slider/CTC_Ranges_97753_30864.jpg" alt="Placements At NIT Jalandhar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 main1">
                                    <h1>NIT Jalandhar's students bagged <span>high packages</span> and work with companies like <span>Google, Amazon & Microsoft</span> etc.</h1>
                                </div>
                                <div className="col-md-7 col-sm-12 main2">
                                    <img src="https://www.nitj.ac.in/images/slider/04_Highest_Package_32291.png" alt="Placements At NIT Jalandhar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="mains1">
                <Grow in>
                    <Grid className="container1 my-4" container alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <a href="https://ctp.nitj.ac.in/index_placements" target="blank" style={{ textDecoration: "none" }}>
                                <div className='details'>
                                    <TbReportSearch style={{ fontSize: "2.5em" }} />
                                    <p className='descs'>Placements</p>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <a href="https://ctp.nitj.ac.in/index_internship" target="blank" style={{ textDecoration: "none" }}>
                                <div className='details'>
                                    <MdOutlineWorkHistory style={{ fontSize: "2.5em" }} />
                                    <p className='descs'>Internships</p>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <a href="https://ctp.nitj.ac.in/index_wrecruit" target="blank" style={{ textDecoration: "none" }}>
                                <div className='details'>
                                    <MdOutlinePersonSearch style={{ fontSize: "2.5em" }} />
                                    <p className='descs'>Why Recruit?</p>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <a href="https://ctp.nitj.ac.in/index_people" target="blank" style={{ textDecoration: "none" }}>
                                <div className='details'>
                                    <MdPeopleAlt style={{ fontSize: "2.5em" }} />
                                    <p className='descs'>People</p>
                                </div>
                            </a>
                        </Grid>
                    </Grid>
                </Grow>
            </div >
        </>
    );
}



export default Carousal;