import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Share/Loading/Loading';
import axios from 'axios';

const Login = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef('');

    const handleSubmit = async event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/login', { email })
        console.log(data)
        localStorage.setItem('accessToken',data.accessToken)
        navigate(from, { replace: true });
        event.target.reset()
    }

    const handleResetPass = async (event) => {
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter Your Email')
        }
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        // navigate('/')
    }
    const navigateRegister = () => {
        navigate('/register')
    }

    return (
        <div className='login-container'>

            <Form className='login-from' onSubmit={handleSubmit}>
                <h1 className='login-title'>Login</h1>
                <Form.Group className="mb-3 mx-auto" controlId="formGroupEmail">

                    <Form.Control name="email" type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group className="mb-3  mx-auto" controlId="formGroupPassword">

                    <Form.Control type="password" name="password" placeholder=" Enter Your Password" />
                </Form.Group>
                <Button variant="info" type="submit" className='submit-btn'>
                    Login
                </Button>

                <div className='account'>
                    <p>New to smart gadget warehouse ? <Link to='/register' onClick={navigateRegister} className='text-primary  pe-auto'>
                        Please Register
                    </Link></p>

                    <p onClick={handleResetPass}>Forget Password ? <span className='text-primary  pe-auto'>Reset Password </span></p>
                </div>

                <SocialLogin></SocialLogin>
            </Form>


        </div>
    );
};

export default Login;