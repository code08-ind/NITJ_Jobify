import '../styles/AddCompany.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { addCompany } from '../service/api';
import { useNavigate } from 'react-router-dom';

/* Default Value for form data */
const defaultValue = {
    name: '',
    email: '',
    contact: '',
    year: '',
    types: '',
    eligibility: '',
    date: '',
    streams: '',
    jdLink: '',
    applyLink: '',
    postType: '',
    packages: '',
    logo: '',
    desc: '',
    imgLink: '',
    program:''
};

/* Add Company Page */
const AddCompany = () => {
    document.title = 'Add Company | NITJ\'s Jobify';
    const [company, setCompany] = useState(defaultValue);
    const [btnText, setBtnText] = useState('Add Company Details');
    const navigate = useNavigate();

    /* On value change of the form data input */
    const onValueChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    }

    /* Add company functions */
    const addCompanyDetails = async (e) => {
        e.preventDefault();
        await addCompany(company);
        setBtnText('Added Company!');
        navigate("/dashboardRequests");
    }

    return (
        <div className='container mt-3'>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='head'>Add Company Details</motion.h1>
            <form onSubmit={(e) => addCompanyDetails(e)} method="post">
                <div className="row">
                    <div className="col-md-6 col-sm-12 main1">
                        <input autoComplete="off" type="text" name='name' required placeholder='Enter Company Name' onChange={(e) => onValueChange(e)} />
                        <input autoComplete="off" type="email" name='email' required placeholder='Enter Company Email' onChange={(e) => onValueChange(e)} />
                        <input autoComplete="off" type="text" name='desc' required placeholder='Enter Company Description' onChange={(e) => onValueChange(e)} />
                        <input autoComplete="off" type="text" name='contact' required placeholder='Enter Company Contact Number' onChange={(e) => onValueChange(e)} />
                        <input autoComplete="off" type="text" name='year' required placeholder='Enter Batch Year (Eg: 2024)' onChange={(e) => onValueChange(e)} />
                        <input autoComplete="off" type="text" name='eligibility' required placeholder='Enter Company Eligibility Criteria (Eg: 7+ CGPA)' onChange={(e) => onValueChange(e)} />
                    </div>
                    <div className="col-md-6 col-sm-12 main2">
                        <input autoComplete="off" type="text" name='logo' required placeholder='Enter Company Logo Link' onChange={(e) => onValueChange(e)} />
                        <input autoComplete="off" type="text" name='imgLink' required placeholder='Enter Company Image Link' onChange={(e) => onValueChange(e)} />
                        <input autoComplete="off" type="text" name='jdLink' required placeholder='Enter Company JD Link' onChange={(e) => onValueChange(e)} />
                        <input autoComplete="off" type="text" name='applyLink' required placeholder='Enter Company Apply Link' onChange={(e) => onValueChange(e)} />
                        <input autoComplete="off" type="text" name='packages' required placeholder='Enter Company Package (Eg: 44 LPA)' onChange={(e) => onValueChange(e)} />
                        <input autoComplete="off" type="text" name='types' required placeholder='Enter Post Name (Eg: SDE)' onChange={(e) => onValueChange(e)} />
                    </div>
                </div>
                <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='streams' placeholder='Enter Streams (Separated By -) (Eg:IT-CSE)' onChange={(e) => onValueChange(e)} />
                <select style={{ color: "black" }} value={company.postType} required name="postType" onChange={(e) => onValueChange(e)} className='dateInp'>
                    <option value="Select Post Type">Select Post Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="6 Months Intern + FTE">6 Months Intern + FTE</option>
                    <option value="6 Months Internship">6 Months Internship</option>
                    <option value="2 Months Internship">2 Months Internship</option>
                </select>
                <select style={{ color: "black" }} value={company.program} required name="program" onChange={(e) => onValueChange(e)} className='dateInp'>
                    <option value="Select Program">Select Program</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="MBA">MBA</option>
                    <option value="M.Sc">M.Sc</option>
                </select>
                <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='date' placeholder='Enter Company Visiting Time & Date (Eg: 11 AM - 12 September 2023)' onChange={(e) => onValueChange(e)} />
                <button className='add' type='submit'>{btnText}</button>
            </form>
        </div>
    );
}

export default AddCompany;