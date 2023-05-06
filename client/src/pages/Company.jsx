import '../styles/Company.css';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Button from '@mui/material/Button';
import { getCompany } from '../service/api';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MessageLoader from '../components/MessageLoader';

/* Default value for form data */
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

/* Company Page */
const Company = () => {
    const [company, setCompany] = useState(defaultValue);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        loadCompanyDetails();
    }, []);

    /* Load company details in getting company detail */
    const loadCompanyDetails = async () => {
        const response = await getCompany(id);
        setCompany(response.data[0]);
    }

    return (
        <div className='container'>
            <h1>Company Details</h1>
            {isLoading ? <MessageLoader /> :
                <div className="row">
                    <div className="col-md-6 col-sm-12 one">
                        <h2>{company.name}</h2>
                        <table>
                            <tr>
                                <td>Email</td>
                                <td>{company.email}</td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>{company.contact}</td>
                            </tr>
                            <tr>
                                <td>Post Name</td>
                                <td>{company.types}</td>
                            </tr>
                            <tr>
                                <td>Package</td>
                                <td>{company.packages}</td>
                            </tr>
                            <tr>
                                <td>Post Type</td>
                                <td>{company.postType}</td>
                            </tr>
                            <tr>
                                <td>Eligibility</td>
                                <td>{company.eligibility}</td>
                            </tr>
                            <tr>
                                <td>Program</td>
                                <td>{company.program}</td>
                            </tr>
                            <tr>
                                <td>Last Apply Date</td>
                                <td>{company.date}</td>
                            </tr>
                            <tr>
                                <td>
                                    Streams Allowed:
                                </td>
                            </tr>
                        </table>
                        <Grow in>
                            <Grid className="container1 mt-1" container>
                                {company.streams.split("-").map((contents) => (
                                    <Grid item xs={12} sm={6} lg={2} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} key={contents}>
                                        <span className='font-weight-bold three' key={contents}>{contents}</span>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grow>
                        <Button variant="contained" className='my-1' color="info">
                            <a href={company.jdLink} target='blank' style={{ color: "white", textDecoration: "none" }}>
                                Link For JD
                            </a>
                        </Button>
                        <Button variant="contained" color="success">
                            <a href={company.applyLink} target='blank' style={{ color: "white", textDecoration: "none" }}>
                                Apply For Post
                            </a>
                        </Button>
                    </div>
                    <div className="col-md-6 col-sm-12 two">
                        <img src={company.imgLink} alt={company.name + ' Logo'} className='imgData' />
                    </div>
                </div>
            }
        </div>
    );
}

export default Company;