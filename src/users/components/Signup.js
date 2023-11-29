import { useContext, useState } from "react";
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { AuthContext } from "../../shared/context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [formObj, setFormObj] = useState({ username: '', email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    const formHandler = e => {
        setFormObj({ ...formObj, [e.target.name]: e.target.value })
    }

    const signupHandler = async e => {
        e.preventDefault();
        navigate('/events')

        try {

            // POST the data to the database
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, { ...formObj });
            const userData = response.data;

            // When Sign up will automatically log in
            sessionStorage.setItem('userId', userData._id);
            sessionStorage.setItem('userRole', userData.role);

        } catch (err) {
            console.log(err)
            setErrorMessage('Duplicate User')
        }


    }
    return (
        <form className='login-form w-25 mx-auto'>
            <Input id='username' label='Username' name='username' onChange={formHandler} />
            <Input id='email' label='Email' type='Email' name='email' onChange={formHandler} />
            <Input id='password' label='Password' type='password' name='password' onChange={formHandler} />
            <p className="text-danger">{errorMessage}</p>
            <Button buttonName='Sign Up' className='auth-button' onClick={signupHandler} />
            <hr />
            <p className='text-center'>Already have an account?  <a href='/login'>Login</a></p>
        </form>);
}

export default Signup;