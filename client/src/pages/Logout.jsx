import axios from 'axios';
import '../styles/LogOut.css';
import { UserContext } from '../App';
import logout from '../images/logout.svg';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';

/* Logout Page */
const Logout = () => {
    document.title = 'Logout | NITJ\'s Jobify';
    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext);

    /* Backend URL */
    const URL = "https://nitj-jobify-backend.onrender.com";

    /* Logout function */
    const userLogout = async () => {
        await axios.get(`${URL}/user/logout`).then((res) => {
            dispatch({ type: "USER", payload: false });
            setTimeout(() => {
                navigate("/");
            }, 1000);
            if (!res.status === 200) {
                throw new Error(res.error);
            }
        }).catch((err) => {
            console.error(err);
        });
    }

    useEffect(() => {
        userLogout();
    });

    return (
        <>
            <div className="error mt-2">
                <img src={logout} alt="404 Error" />
                <h1>THANKS FOR VISITING! You Will Be Logged Out Shortly</h1>
                <p>You Are Being Redirected To Home Page!!</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Logout;