import React from 'react';
import '../styles/CompanyPolicy.css';
import { motion } from "framer-motion";

/* Company Policy Page */
const CompanyPolicy = () => {
    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='text-center mt-4'
            >
                Company Policy
            </motion.h1>
            <div className="list">
                <ol>
                    <li>An organization must share the all details pertaining to the internship and submit the duly filled INF to create an opening.</li>
                    <li>It is expected that the organization should allot a well-defined project and a clearly stated objectives for the student.</li>
                    <li>Since internships involve academic credits, the company will have to allot a supervisor for each intern, called as external supervisor.</li>
                    <li>The external supervisor is expected to share the progress of the intern on a regular basis with the internal advisor (a faculty from NIT Jalandhar). This will help the institute to monitor the progress of the project continuously. Moreover, at the end of each calendar month, the intern submits monthly interim progress report to the internal advisor.</li>
                    <li>The company is expected to release the list of selected candidates within two working days after the selection process is complete in the campus through training and placement cell. This will make sure that the students selected for the company will not appear for any other companies.</li>
                    <li>The company is suggested to keep a waitlist of students. In case a student fails to sign will for a particular position, the offer will automatically be apprised to the next student in the wait list.</li>
                    <li>In case of pre-placement offers (PPO), all companies are expected to inform PPO always through the placement cell only.</li>
                    <li>At the end of the internship, the external supervisor needs to fill an evaluation form for each intern. The information received through this form will be used in grading.</li>
                </ol>
            </div>
            <br />
            <br />
        </>
    );
}

export default CompanyPolicy;