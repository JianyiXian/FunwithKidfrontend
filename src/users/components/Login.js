import { useContext } from "react";
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { AuthContext } from "../../shared/context/authContext";

import './Login.css'
const Login = () => {
    const auth = useContext(AuthContext);
    const formhandler = event => {
        event.preventDefault();
        console.log(event.target.value)

    }

    return (
        <form className='login-form w-25 mx-auto' >
            <Input id='username' label='Username' onChange={formhandler} />
            <Input id='password' label='Password' type='password' onChange={formhandler} />
            <Button buttonName='Log In' className='auth-button' />
            <hr />
            <p className='text-center'>Don't have an account?  <a href='/signup'>Signup</a></p>
        </form>);
}

export default Login;