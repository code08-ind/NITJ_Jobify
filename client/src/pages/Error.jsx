import React from 'react';
import '../styles/Error.css';
import error from '../images/error.svg';
import { NavLink } from 'react-router-dom';

/* Error page */
const Error = () => {
    document.title = 'Error 404 | NITJ\'s Jobify';
    return (
        <div className='container'>
            <img src={error} alt="Error Page 404, Return To Home Page" />
            <p><NavLink to="/">Return To Home</NavLink></p>
        </div>
    );
}

export default Error;