import '../styles/EditCompany.css';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { editCompany, getCompany } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

/* Default value of form input data */
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
    program: ''
};

/* Edit Company Page */
const EditCompany = () => {
    document.title = 'Edit Company | NITJ\'s Jobify';
    const [company, setCompany] = useState(defaultValue);
    const [btnText, setBtnText] = useState('Edit Company Details');

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadCompanyDetails();
    }, []);

    /* Load company details for get request */
    const loadCompanyDetails = async () => {
        const response = await getCompany(id);
        setCompany(response.data[0]);
    }

    /* On form value data change */
    const onValueChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    }

    /* Edit Company details function */
    const editCompanyDetails = async (e) => {
        e.preventDefault();
        await editCompany(company, id);
        setBtnText('Edited Company Details!');
        navigate("/dashboardRequests");
    }

    return (
        <div className='container'>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='head'>Edit Company Details</motion.h1>
            <form onSubmit={(e) => editCompanyDetails(e)} method='post'>
                <div className="row">
                    <div className="col-md-6 col-sm-12 main1">
                        <input autoComplete="off" type="text" name='name' required onChange={(e) => onValueChange(e)} placeholder='Enter Company Name' value={company.name} />
                        <input autoComplete="off" type="text" name='email' required onChange={(e) => onValueChange(e)} placeholder='Enter Company Email' value={company.email} />
                        <input autoComplete="off" type="text" name='desc' required onChange={(e) => onValueChange(e)} placeholder='Enter Company Description' value={company.desc} />
                        <input autoComplete="off" type="text" name='contact' required onChange={(e) => onValueChange(e)} placeholder='Enter Company Contact Number' value={company.contact} />
                        <input autoComplete="off" type="text" name='year' required onChange={(e) => onValueChange(e)} placeholder='Enter Batch Year (Eg: 2024)' value={company.year} />
                        <input autoComplete="off" type="text" name='eligibility' required onChange={(e) => onValueChange(e)} placeholder='Enter Company Eligibility Criteria (Eg: 7+ CGPA)' value={company.eligibility} />
                    </div>
                    <div className="col-md-6 col-sm-12 main2">
                        <input autoComplete="off" type="text" name='logo' required onChange={(e) => onValueChange(e)} placeholder='Enter Company Logo Link' value={company.logo} />
                        <input autoComplete="off" type="text" name='imgLink' required onChange={(e) => onValueChange(e)} placeholder='Enter Company Image Link' value={company.imgLink} />
                        <input autoComplete="off" type="text" name='jdLink' required onChange={(e) => onValueChange(e)} placeholder='Enter Company JD Link' value={company.jdLink} />
                        <input autoComplete="off" type="text" name='applyLink' required onChange={(e) => onValueChange(e)} placeholder='Enter Company Apply Link' value={company.applyLink} />
                        <input autoComplete="off" type="text" name='packages' required onChange={(e) => onValueChange(e)} placeholder='Enter Company Package (Eg: 44 LPA)' value={company.packages} />
                        <input autoComplete="off" type="text" name='types' required onChange={(e) => onValueChange(e)} placeholder='Enter Post Name (Eg: SDE)' value={company.types} />
                    </div>
                </div>
                <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required value={company.streams} name='streams' placeholder='Enter Streams (Separated By -) (Eg:IT-CSE)' onChange={(e) => onValueChange(e)} />
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
                <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required value={company.date} name='date' placeholder='Enter Company Visiting Time & Date (Eg: 11 AM - 12 September 2023)' onChange={(e) => onValueChange(e)} />
                <button className='add' type='submit'>{btnText}</button>
            </form>
        </div>
    );
}

export default EditCompany;