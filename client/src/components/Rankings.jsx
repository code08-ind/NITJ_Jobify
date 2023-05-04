import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Dashboard.css';
import React,{useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import RankingData from '../data/Rankings.js';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

/* Rankings Component */
const Rankings = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <>
            <div className='container2'>
                <h1 className='text-center' data-aos="zoom-in">RANKINGS AND ACCOLADES</h1>
                <p className='text-center' data-aos="zoom-in">Highly ranked for Placements</p>
                <Grow in>
                    <Grid className="container1" container alignItems="stretch" spacing={3}>
                        {RankingData.map((content) => (
                            <Grid item xs={12} sm={6} lg={4} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} key={content.id}>
                                <Card sx={{ maxWidth: 330 }} className='my-1' key={content.id} data-aos="fade-up">
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        className='imag'
                                        image={content.imgLink}
                                        alt={content.name + ' Logo Image'}
                                    />
                                    <CardContent>
                                        <Typography variant="body1" color="text.secondary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                            {content.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <br />
                            </Grid>
                        ))}
                    </Grid>
                </Grow>
            </div>
        </>
    );
}

export default Rankings;