import axios from 'axios';
import '../styles/Login.css';
import { UserContext } from '../App';
import { motion } from 'framer-motion';
import { FiEye } from "react-icons/fi";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useState, useContext } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/* Default Value of form data */
const defaultValue = {
    password: '',
    email: '',
};

/* Login Page */
const Login = () => {
    document.title = 'Login | NITJ\'s Jobify';
    const [btn, setBtn] = useState(0);
    const [msg, setMsg] = useState('');
    const [severity, setSeverity] = useState('');
    const [visibility, setVisibility] = useState('none');
    const { state, dispatch } = useContext(UserContext);
    const [btnText, setBtnText] = useState('Login User');
    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();

    /* Backend URL */
    const URL = "https://nitj-jobify-backend.onrender.com";

    /* On value change of form input data */
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    /* Login show/hide password button */
    const handleChangeButton = () => {
        setBtn(btn + 1);
    }

    /* Login function */
    const userLogin = async (data) => {
        try {
            const res = await axios.post(`${URL}/user/login`, data);
            if (res.status === 200 && res.data) {
                setMsg('Login Successful. You Will Be Redirected Shortly!');
                setSeverity('success');
                setBtnText('Login Successful!');
                dispatch({ type: "USER", payload: true });
                setTimeout(() => {
                    navigate("/dashboardRequests");
                }, 2800);
            }
            else {
                setMsg('Login Unsuccessful. Use Correct Credentials or Fill Credentials!');
                setSeverity('error');
                setBtnText('Login Unsuccessful!');
                setTimeout(() => {
                    navigate("/");
                }, 2800);
            }
        } catch (error) {
            setMsg('Login Unsuccessful. Use Correct Credentials or Fill Credentials!');
            setSeverity('error');
            setBtnText('Login Unsuccessful!');
            setTimeout(() => {
                navigate("/");
            }, 2800);
        }
    }

    /* User login function */
    const userLogined = async (e) => {
        e.preventDefault();
        setVisibility('block');
        await userLogin(user);
    }

    return (
        <>
            <div className='container1 my-4'>
                <Stack sx={{ width: '90%' }} spacing={1} style={{ margin: "0 auto" }}>
                    <Alert className='alert' icon={severity === 'success' ? <CheckCircleIcon fontSize="inherit" /> : ""} severity={severity} style={{ fontFamily: 'Montserrat, serif', display: visibility }}>
                        <AlertTitle style={{ fontFamily: 'Montserrat, serif', fontSize: "1.2em" }}>{msg}</AlertTitle>
                    </Alert>
                </Stack>
                <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className='mt-4'
                >
                    Admin Login
                </motion.h1>
                <form method='POST' className='mb-4 mt-4' onSubmit={(e) => userLogined(e)}>
                    <input autoComplete="off" required className='email' onChange={(e) => onValueChange(e)} name="email" type="text" placeholder='Enter Admin Email' />
                    <div className='passDiv'>
                        <input autoComplete="off" required className='pass' onChange={(e) => onValueChange(e)} name="password" type={btn % 2 === 0 ? 'password' : 'text'} placeholder='Enter Admin Password' />
                        <span onClick={handleChangeButton} className='mr-2' style={{ height: "100%" }}>{btn % 2 === 0 ? <IconButton color="#bdbdbd" title="Show Password"><FiEye style={{ height: "20px", cursor: "pointer", color: "#bdbdbd" }} /></IconButton> : <IconButton color="info" title="Hide Password"><FiEyeOff style={{ height: "20px", cursor: "pointer", color: "grey" }} /></IconButton>}</span>
                    </div>
                    <button type='submit' className='add mb-5'>{btnText}</button>
                </form>
            </div>
            <br />
            <br />
            <br />
        </>
    );
}

export default Login;