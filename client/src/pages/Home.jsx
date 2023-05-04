import React from 'react';
import FAQ from '../components/FAQ';
import Carousal from '../components/Carousal';
import Companies from '../components/Companies';
import Chatbot from '../components/Chatbot';

/* Home page */
const Home = () => {
    document.title = 'NITJ\'s Jobify';
    return (
        <>
            <Chatbot />
            <Carousal />
            <Companies />
            <FAQ />
        </>
    );
}

export default Home;