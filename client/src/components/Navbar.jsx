import '../styles/Navbar.css';
import { UserContext } from '../App';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

/* Navbar Component */
const Navbar = () => {
    /* State change for the Authentication and Authorization */
    const { state, dispatch } = useContext(UserContext);
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" to="/addCompany">Add</NavLink>
                    <NavLink className="nav-item nav-link" to="/dashboardRequests">Edit/Delete</NavLink>
                    <NavLink className="nav-item nav-link" to="/message/messages">Messages</NavLink>
                    <NavLink className="nav-item nav-link" to="/email/emails">Emails</NavLink>
                    <NavLink className="nav-item nav-link" to="/testimonialRequests">Testimonials</NavLink>
                    <NavLink className="nav-item nav-link" to="/testRequests">Tests</NavLink>
                    <NavLink className="nav-item nav-link" to="/presentationRequests">Presentations</NavLink>
                    <NavLink className="nav-item nav-link" to="/message/addMessage">Contact</NavLink>
                    <NavLink className="nav-item nav-link" to="/user/logout">Logout</NavLink>
                </>
            );
        } else {
            return (
                <>
                    <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-item nav-link" to="/companies">Dashboard</NavLink>
                    <NavLink className="nav-item nav-link" to="/test/tests">Tests</NavLink>
                    <NavLink className="nav-item nav-link" to="/presentation/presentations">Presentations</NavLink>
                    <NavLink className="nav-item nav-link" to="/message/addMessage">Contact</NavLink>
                    <NavLink className="nav-item nav-link" to="/more">More</NavLink>
                    <NavLink className="nav-item nav-link" to="/user/login">Login</NavLink>
                    <a className="nav-item nav-link" target='blank' href="https://ctp.nitj.ac.in/">CTP-NITJ</a>
                    <a className="nav-item nav-link" target='blank' href="https://www.nitj.ac.in/">Main Site</a>
                </>
            );
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ borderBottom: '1px solid rgba(200, 200, 200, 0.5)' }}>
            <NavLink className="navbar-brand font-bold" to="/" style={{ fontWeight: 'bold' }}>
                <img src="https://departments.nitj.ac.in/static/media/logo.f2c76d0937070ba81dc0.png" width={42} height={42} alt="NIT Jalandhar Logo" />
                &nbsp;NIT Jalandhar's <span style={{ color: 'rgb(238, 10, 97)' }}>Jobify</span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <RenderMenu />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;