import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/More.css';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import React, { useEffect } from 'react';
import TechsData from '../data/TechsData';

/* Technologies Component */
const Techs = () => {
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
                <Grid className="container1 my-4" container alignItems="stretch" spacing={3}>
                    {TechsData.map((content) => (
                        <Grid item xs={12} sm={6} lg={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} key={content.id}>
                            <img src={content.img} data-aos="fade-down" alt={'Logo Of ' + content.desc} key={content.img} />
                            <p className='tech' key={content.desc} data-aos="fade-down">{content.desc}</p>
                            <br key={content.id} />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        </div>
    );
}

export default Techs;