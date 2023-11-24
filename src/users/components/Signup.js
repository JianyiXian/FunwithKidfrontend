import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";


const Signup = () => {
    return (
        <form className='login-form w-25 mx-auto'>
            <Input id='username' label='Username' />
            <Input id='email' label='Email' type='Email' />
            <Input id='password' label='Password' type='password' />
            <Button buttonName='Sign Up' className='auth-button' />
            <hr />
            <p className='text-center'>Already have an account?  <a href='/login'>Login</a></p>
        </form>);
}

export default Signup;