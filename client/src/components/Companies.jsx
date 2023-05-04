import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Dashboard.css';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Company from '../data/Company';
import React, { useEffect } from 'react';

/* Companies Component */
const Companies = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <div className="mains">
            <Grow in>
                <Grid className="container1 my-4" container alignItems="stretch" spacing={3}>
                    {Company.map((content) => (
                        <Grid item xs={12} sm={6} lg={3} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} key={content.id}>
                            <img src={content.img} alt={'image' + content.id} data-aos="flip-up"/>
                            <br/>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        </div>
    );
}

export default Companies