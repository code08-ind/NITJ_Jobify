import '../styles/Data.css';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import MessageLoader from '../components/MessageLoader';

/* Data Page */
const Data = () => {
    document.title = 'Data & Stats | NITJ\'s Jobify';
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1200);
    }, []);

    return (
        <div className='containersd mt-4'>
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
            >
                Data About Placement Statistics
            </motion.h1>
            {isLoading ? <MessageLoader /> : (
                <div>
                    <p>Data About Batch And Package Of Batch (2016-2020)</p>
                    <iframe title="JOBSIFY PLACEMENT PROJECT" width="800" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiNDBiZGZhMmItZmY2My00ZmYyLThmNWYtNWJkODc1Y2ZmODY5IiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9" frameborder="0" allowFullScreen="true"></iframe>
                </div>
            )}
            <br />
            {isLoading ? <MessageLoader /> : (
                <div>
                    <p>Data About Placements And Package Of Batch (2016-2020)</p>
                    <iframe title="Report Section" width="800" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiNGJlYWE0Y2UtNmMzOS00Zjc5LTllNmUtYzk0ZWRmM2JhY2FkIiwidCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsImMiOjZ9" frameborder="0" allowFullScreen="true"></iframe>
                </div>
            )}
        </div>
    );
}

export default Data;