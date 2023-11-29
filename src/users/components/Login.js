import { useContext, useState } from "react";
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";

import './Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [formObj, setFormObj] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState();

    const navigate = useNavigate();

    const formhandler = e => {
        e.preventDefault();
        setFormObj({ ...formObj, [e.target.name]: e.target.value });
        console.log(formObj);

    }

    const clickHandler = async e => {
        e.preventDefault();
        try {
            // Post the login data to the database
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, { ...formObj })
            const userData = response.data;

            sessionStorage.setItem('userId', userData._id);
            sessionStorage.setItem('userRole', userData.role);
            navigate('/events')


        } catch (err) {
            console.log(err);
            setErrorMessage('Invaild email or password!')
        }

    }

    return (
        <form className='login-form w-25 mx-auto' >
            <Input id='email' label='Email' name='email' onChange={formhandler} />
            <Input id='password' label='Password' type='password' name='password' onChange={formhandler} />
            <p className='text-danger'>{errorMessage}</p>
            <Button buttonName='Log In' className='auth-button' onClick={clickHandler} />
            <hr />
            <p className='text-center'>Don't have an account?  <a href='/signup'>Signup</a></p>
        </form>);
}

export default Login;