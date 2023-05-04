import React from 'react';
import { motion } from 'framer-motion';
import Techs from '../components/Techs';
import Contributers from '../components/Contributers';

/* More Page */
const More = () => {
    document.title = 'More Info | NITJ\'s Jobify';
    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}  className='text-center mt-4'>Technologies Used And Contributors</motion.h1>
            <motion.p initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }} className='desc text-center'>Technologies Used</motion.p>
            <Techs />
            <br />
            <motion.p initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }} className='desc text-center'>Contributors To Portal Building</motion.p>
            <Contributers />
        </>
    );
}

export default More;