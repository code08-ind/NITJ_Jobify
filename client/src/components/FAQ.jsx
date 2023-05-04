import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/FAQ.css';
import data from '../data/FAQData';
import Faq from "react-faq-component";
import React, { useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "#2F58CD",
    rowContentColor: 'grey',
    arrowColor: "#fd0c75",
};

const config = {
    animate: true,
    tabFocus: true
};

/* FAQ Component */
const FAQ = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <div className='container1 mt-4'>
            <div className="row1">
                <div className="main1 col-md-7 col-sm-12 mt-4" data-aos="fade-up">
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                        className="mt-4"
                    />
                </div>
                <div className="main2 col-md-4 col-sm-12" data-aos="flip-down">
                    <h4 className='text-center'>Contact Information</h4>
                    <p className='text-center'>Training And Placement Office</p>
                    <ul>
                        <li><PersonIcon style={{ marginBottom: "10px", color: "#2F58CD" }} /> Dr. Rajeev Trehan </li>
                        <li style={{ marginLeft: "28px", marginBottom: "10px", fontWeight: "600", color: "#2F58CD" }}>Associate Professor & Head (TPO, NITJ)</li>
                        <li><CallIcon style={{ marginBottom: "10px", color: "#2F58CD" }} /> +91-8146500951</li>
                        <li><EmailIcon style={{ marginBottom: "0px", color: "#2F58CD" }} />  ctp@nitj.ac.in, hctp@nitj.ac.in</li>
                    </ul>
                </div>
            </div>
            <br />
        </div >
    );
}

export default FAQ;