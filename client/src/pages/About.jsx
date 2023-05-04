import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';
import Hero from '../components/Hero';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Rankings from '../components/Rankings';
import { CChart } from '@coreui/react-chartjs';
import { MdOutlinePolicy } from "react-icons/md";
import { MdOutlineManageSearch } from "react-icons/md";
import { MdOutlineCallToAction } from "react-icons/md";
import { MdOutlineCloudDownload } from "react-icons/md";
import ListOfCompanies from '../components/ListOfCompanies';

/* About Page */
const About = () => {
    document.title = 'About | NITJ\'s Jobify';
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <>
            <Hero />
            <div className="mains1">
                <Grow in>
                    <Grid className="container1 my-4" container alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <NavLink to="/placementProcess" style={{ textDecoration: "none" }}>
                                <div className='details'>
                                    <MdOutlineCallToAction style={{ fontSize: "2.5em" }} />
                                    <p className='descs'>Placement Process</p>
                                </div>
                            </NavLink>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <NavLink to="/companyPolicy" style={{ textDecoration: "none" }}>
                                <div className='details'>
                                    <MdOutlineManageSearch style={{ fontSize: "2.5em" }} />
                                    <p className='descs'>Company Policy</p>
                                </div>
                            </NavLink>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <NavLink to="/studentPolicy" style={{ textDecoration: "none" }}>
                                <div className='details'>
                                    <MdOutlinePolicy style={{ fontSize: "2.5em" }} />
                                    <p className='descs'>Placement Policy</p>
                                </div>
                            </NavLink>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <a href="https://ctp.nitj.ac.in/index_download" target="blank" style={{ textDecoration: "none" }}>
                                <div className='details'>
                                    <MdOutlineCloudDownload style={{ fontSize: "2.5em" }} />
                                    <p className='descs'>Downloads</p>
                                </div>
                            </a>
                        </Grid>
                    </Grid>
                </Grow>
            </div >
            <Rankings />
            <div className="container" style={{ marginTop: "140px", marginBottom: "120px" }}>
                <h1 style={{ fontWeight: 'bold', margin: '200px 0 50px 0' }} className='text-center' data-aos="zoom-in">STATISTICS</h1>
                <div className="row mt-2">
                    <div className="main1 col-md-6 col-sm-12" style={{ textAlign: "center" }} data-aos="fade-down">
                        <p className='text-center' style={{ textAlign: "center" }}>Total Students Eligible (vs) Total Number Of Job Offers</p>
                        <CChart
                            type="line"
                            style={{ height: '100%', width: '100%', marginRight: "50px" }}
                            data={{
                                labels: ['ECE', 'EE', 'CSE', 'IT', 'CHE', 'ICE', 'CE', 'IPE', 'ME', 'BT', 'TT'],
                                datasets: [
                                    {
                                        label: "Total Students Eligible",
                                        backgroundColor: "rgba(19, 0, 90,0.4)",
                                        borderColor: "#13005A",
                                        pointBackgroundColor: "#13005A",
                                        pointBorderColor: "#fff",
                                        data: [108, 61, 120, 59, 93, 111, 82, 93, 100, 37, 87]
                                    },
                                    {
                                        label: "No. Of Job Offers",
                                        backgroundColor: "rgba(214, 19, 85, 0.4)",
                                        borderColor: "#D61355",
                                        pointBackgroundColor: "#D61355",
                                        pointBorderColor: "#fff",
                                        data: [80, 34, 117, 58, 59, 63, 32, 26, 56, 8, 29]
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="main2 col-md-6 col-sm-12" data-aos="fade-down">
                        <p>Average Package Department Wise (LPA)</p>
                        <CChart
                            type="bar"
                            style={{ height: '100%', width: '100%', marginLeft: "50px" }}
                            data={{
                                labels: ['ECE', 'EE', 'CSE', 'IT', 'CHE', 'ICE', 'CE', 'IPE', 'ME', 'BT', 'TT'],
                                datasets: [
                                    {
                                        label: 'Average Package Department Wise (LPA)',
                                        backgroundColor: '#62CDFF',
                                        data: [18.22, 11.51, 17.53, 13.2, 7.62, 10.34, 8.24, 8.5, 8.14, 8.86, 7],
                                    },
                                ],
                            }}
                            labels="packages"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="main1 col-md-6 col-sm-12" data-aos="fade-down">
                        <p>Companies Recruiting At NIT Jalandhar (Year Wise)</p>
                        <CChart
                            type="doughnut"
                            style={{ height: '100%', width: '100%', marginRight: "50px" }}
                            data={{
                                labels: ['2018', '2019', '2020', '2021', '2022'],
                                datasets: [
                                    {
                                        label: 'Companies Recruiting At NIT Jalandhar',
                                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#5D3891'],
                                        data: [200, 250, 300, 400, 500],
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="main2 col-md-6 col-sm-12" data-aos="fade-down">
                        <p>Top Recruiters In Recent Years</p>
                        <CChart
                            type="polarArea"
                            style={{ height: '100%', width: '100%', marginLeft: "50px" }}
                            data={{
                                labels: ['Deloitte', 'Samsung', 'Amazon', 'Incedo', 'Microsoft'],
                                datasets: [
                                    {
                                        label: 'Top Recruiters In Recent Years',
                                        data: [50, 20, 35, 40, 15],
                                        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#36A2EB', '#5D3891'],
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
            <ListOfCompanies />
        </>
    );
}

export default About;