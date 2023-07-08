import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contacts.css';
import React, {useEffect} from 'react';

/* Footer Component */
const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (
        <footer className="contacts">
            <div className="container">
                <div className="row">
                    <img src="https://departments.nitj.ac.in/static/media/logo.f2c76d0937070ba81dc0.png" alt="NIT Jalandhar" className='mr-1'/>
                    <h6 className='mt-4'>Dr. B R Ambedkar National Institute Of Technology, Jalandhar, Punjab</h6>
                </div>
                <p className='mt-2'>&copy; All Rights Reserved With @NIT Jalandhar</p>
            </div>
        </footer>
    );
}

export default Footer;