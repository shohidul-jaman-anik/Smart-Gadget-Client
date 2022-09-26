import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './Register.css'
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Share/Loading/Loading';
import auth from '../../../firebase.init';


const Register = () => {
    const navigate = useNavigate('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [agree, setAgree] = useState(false)

    const handleRegisterSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.password.value;
        console.log(email, password)
        createUserWithEmailAndPassword(email, password)

        if (password !== confirmPassword) {
            toast.error('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            toast.error('Password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password)
        event.target.reset()
    }

  
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home')
    }

    const navigateRegister = () => {
        navigate('/login')
    }
    return (
        <div className='register-container'>
            <Form onSubmit={handleRegisterSubmit}>
                <h1 className='register-title'>Register</h1>
                <Form.Group className="mb-3  mx-auto" controlId="formGroupEmail">
                    <Form.Control name="name" type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3  mx-auto" controlId="formGroupEmail">

                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3  mx-auto" controlId="formGroupPassword">

                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3  mx-auto" controlId="formGroupPassword">

                    <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox" onClick={() => setAgree(!agree)}><label htmlFor="" className={`ps-4    ${agree ? 'text-primary' : 'text-danger'}`}>Accept Genius car terms and condition</label>
                    <Form.Check type="checkbox" />
                </Form.Group>

                <div className='account'>
                    <p>Already have an account? <Link to='/login' onClick={navigateRegister} className='text-primary  pe-auto'>
                        Please Login
                    </Link></p>

                </div>

                <Button
                    disabled={!agree}
                    variant="info" type="submit" className='register-btn'>
                    Submit
                </Button>
            </Form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;