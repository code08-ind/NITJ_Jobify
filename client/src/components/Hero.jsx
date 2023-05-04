import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Hero.css';
import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

/* Hero Component */
const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    
    return (
        <header style={{ paddingLeft: 0 }}>
            <div
                className='text-center bg-image containerss'
                style={{ backgroundImage: "linear-gradient(rgba(235, 205, 215, 0.4), rgba(235, 205, 215, 0.4)), url('https://www.nitj.ac.in//images/cce/nitj3.jpg')", height: 600, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className='head'
                >About Our<br /> <span>Placements</span></motion.h1>
                <motion.p initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>A portal by NIT Jalandhar which provides all the information regarding the statistics and the <br /> institute's placement and updates students with upcoming opportunities.</motion.p>
                <div className="row">
                    <button data-aos="flip-up"
                    ><NavLink to="/data">See More About Our Statistics</NavLink></button>
                    <button className='main' data-aos="flip-up"><NavLink to="/testimonial/testimonials">See Testimonials By Students</NavLink></button>
                </div>
            </div>
        </header>
    );
}

export default Hero;