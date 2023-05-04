import React from 'react';
import '../styles/Process.css';
import { motion } from "framer-motion";

/* Placement Process Page */
const Process = () => {
    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='text-center mt-4'
            >
                Placement Process
            </motion.h1>
            <div className="list">
                <ol>
                    <li>The Placement office sends invitations to the companies/ organizations along with relevant information.</li>
                    <li>Interested companies contact the TPO cell at ctp@nitj.ac.in.</li>
                    <li>Interested students who show their interest to appear for recruitment process of a company, forward their names to the training and placement representatives.</li>
                    <li>Suitable date for pre placement talk is decided and students are notified.</li>
                    <li>Resume and CV's of students are made available to the concerned company for shortlisting the candidates.</li>
                    <li>The company visit the campus on allocated date and conduct the final selection process and take required number of deserving candidates.</li>
                    <li>The list of selected students is sent to Training and Placement Office with confirmation of offer acceptance.</li>
                </ol>
            </div>
            <br />
            <br />
        </>
    );
}

export default Process;