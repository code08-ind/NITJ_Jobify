import '../styles/EditTest.css';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { editTest, getTest } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

/* Default Value for form data */
const defaultValue = {
    name: '',
    imgLink: '',
    year: '',
    date: '',
    streams: '',
    postType: '',
    type: '',
    testLink: '',
    program:''
};

/* Edit Test Page */
const EditTest = () => {
    document.title = 'Edit Test | NITJ\'s Jobify';
    const [test, setTest] = useState(defaultValue);
    const [btnText, setBtnText] = useState('Edit Test Details');
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadTestDetails();
    }, []);

    /* Load test details for get request */
    const loadTestDetails = async () => {
        const response = await getTest(id);
        setTest(response.data[0]);
    }

    /* On value change of the form data input */
    const onValueChange = (e) => {
        setTest({ ...test, [e.target.name]: e.target.value });
    }

    /* Edit test functions */
    const editTestDetails = async (e) => {
        e.preventDefault();
        await editTest(test, id);
        setBtnText('Edited Test!');
        navigate("/test/tests");
    }

    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='head text-center mt-4'>Edit Test Details</motion.h1>
            <div className='container'>
                <form onSubmit={(e) => editTestDetails(e)} method="post">
                    <input autoComplete="off" value={test.name} type="text" style={{ color: "black" }} className='dateInp' required name='name' placeholder='Enter Company Name' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" value={test.imgLink} type="text" style={{ color: "black" }} className='dateInp' required name='imgLink' placeholder='Enter Company Logo Link' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" value={test.year} type="text" style={{ color: "black" }} className='dateInp' required name='year' placeholder='Enter Batch Year For Test (Eg: 2024)' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" value={test.date} type="text" style={{ color: "black" }} className='dateInp' required name='date' placeholder='Enter Time-Date-Year For Test (Eg: 11 AM-12 September2023' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" value={test.streams} type="text" style={{ color: "black" }} className='dateInp' required name='streams' placeholder='Enter Streamd Allowed For Test Separated With Dash (Eg: IT-CSE-ECE)' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" value={test.type} type="text" style={{ color: "black" }} className='dateInp' required name='type' placeholder='Enter Type Of Post (Eg: SDE)' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" value={test.testLink} type="text" style={{ color: "black" }} className='dateInp' required name='testLink' placeholder='Enter Test Link' onChange={(e) => onValueChange(e)} />
                    <select style={{ color: "black" }} value={test.postType} required name="postType" onChange={(e) => onValueChange(e)} className='dateInp'>
                        <option value="Select Post Type">Select Post Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="6 Months Intern + FTE">6 Months Intern + FTE</option>
                        <option value="6 Months Internship">6 Months Internship</option>
                        <option value="2 Months Internship">2 Months Internship</option>
                    </select>
                    <select style={{ color: "black" }} value={test.program} required name="program" onChange={(e) => onValueChange(e)} className='dateInp'>
                        <option value="Select Program">Select Program</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="MBA">MBA</option>
                        <option value="M.Sc">M.Sc</option>
                    </select>
                    <button className='add' type='submit'>{btnText}</button>
                </form>
            </div>
        </>
    );
}

export default EditTest;