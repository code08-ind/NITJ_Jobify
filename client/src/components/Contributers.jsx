import AOS from 'aos';
import 'aos/dist/aos.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import React, { useEffect } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ContributersData from '../data/ContributersData';

/* Contributers Component */
const Contributers = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <div className="main">
            <Grow in>
                <Grid className="container1 my-4" container alignItems="stretch" spacing={2}>
                    {ContributersData.map((content) => (
                        <Grid item xs={12} sm={6} lg={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} key={content.id}>
                            <Card sx={{ display: 'flex', width: 420, maxWidth: 420 }} data-aos="fade-up" key={content.id} style={{ border: "1px solid black" }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 150, height: 150 }}
                                    style={{ margin: '4px', borderRadius: "3px", backgroundColor: "#FFEBEB", border: "1px solid black" }}
                                    image={content.img}
                                    alt={content.name}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="body2" style={{ fontFamily: 'Cinzel, sans-serif', fontSize: '1.1em', fontWeight: '600' }}>
                                            {content.name}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" component="div" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }}>
                                            {content.desc}
                                        </Typography>
                                        <Typography variant="p" color="text.secondary" component="div">
                                            {content.roll}
                                        </Typography>
                                        <div className='row' style={{ margin: "5px 0px 5px 0px" }}>
                                            <a href={content.linkedIn} target='blank' style={content.linkedIn === "" ? { display: "none" } : { display: "block" }}>
                                                <AiFillLinkedin style={{ fontSize: "2.2em", color: "#0A66C2" }} />
                                            </a>
                                            <a href={content.github} target='blank' style={content.github === "" ? { display: "none" } : { display: "block" }}>
                                                <AiFillGithub style={{ fontSize: "2.2em", color: "#000000" }} />
                                            </a>
                                        </div>
                                    </CardContent>
                                </Box>
                            </Card>
                            <br />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        </div>
    );
}

export default Contributers;