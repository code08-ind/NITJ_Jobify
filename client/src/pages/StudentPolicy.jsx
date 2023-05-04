import React from 'react';
import '../styles/StudentPolicy.css';
import { motion } from "framer-motion";

/* Student Policy Page */
const StudentPolicy = () => {
    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='text-center mt-4'
            >
                Student Placement Policy
            </motion.h1>
            <div className="list">
                <p>This is to inform all the final year students of B.Tech, MBA, M.Tech, M.Sc and PhD students interested for campus placements, that they are required to register for the same. The unregistered students will not be entertained for campus placements. Each student has to submit his or her consent (through their institute email Ids) to the office of Centre of Training and placement. Below are some points to be considered seriously by the interested students before sending their consent:</p>
                <ol>
                    <li>The Dream Package for CSE/IT, ECE &amp; for all other disciplines students will be 10 LPA, 7 LPA and 6 LPA respectively.</li>
                    <li>Any recruiter offering compensation package equal to or more than 25LPA will be considered as Super Dream package.</li>
                    <li>Once the student will be selected for a job having dream package, he/she will not be allowed to appear for any other job other than Super dream and PSUs job opportunities.</li>
                    <li>Any student who has already received a PPO of compensation equal to or above the Dreampackage will not be allowed to further participate in the placement process, except for &lsquo;Super Dream&rsquo;package.</li>
                    <li>Any student selected for Super Dream package will not be allowed to further participate in the campus placement. In any case a student can&rsquo;t hold more than two offers, so if a student has one non dream and a dream package he won&rsquo;t be eligible for super dream.</li>
                    <li>Any student placed initially in the core job will not be allowed to appear for any other job.</li>
                    <li>For all disciplines (except CSE/IT) students can have one core job as well as one IT / Data analyst job. In any case a student can&rsquo;t hold more than two offers.</li>
                    <li>A student who receives a PPO and does not inform the Training &amp; Placement Centre about the same will be debarred from further participating in the placement process.</li>
                    <li>Adhere to a proper formal dress code both during PPT/ online/Physical Placement.</li>
                    <li>If any registered student does not appear consecutively for two companies of his/her core branch they will be debarred from appearing for the next two companies in their core branch.</li>
                    <li>Any student reporting late for Pre-Placement talk / GD / Interview is liable for suitable disciplinary action.</li>
                    <li>Strict disciplinary action will be taken in any case of use unfair means during the aptitude/Coding/Quantitative/Reasoning Test.</li>
                </ol>
                <p>The institute administration reserves the right to amend/ revise the above mentioned clauses of the placement policy as and when required. The intimation of such amendment/ revision will be communicated to the students through email or through their respective branch student placement coordinators.</p>
            </div>
            <br />
            <br />
        </>
    );
}

export default StudentPolicy;