import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './Register.css'
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Share/Loading/Loading';

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
            toast('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            toast('Password must be 6 characters or longer');
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


// import { Button } from 'react-bootstrap';
// import React, { useRef, useState } from 'react';
// import { Form } from 'react-bootstrap';

// import './Register.css'
// import { Link, useNavigate } from 'react-router-dom';
// import auth from '../../firebase.init';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loading from '../../Share/Loading/Loading';
// import SocialLogin from '../SocialLogin/SocialLogin';
// const Register = () => {
//     const navigate = useNavigate('')
//     const emailRef = useRef('')
//     const passwordRef = useRef('')
//     const confirmPasswordRef = useRef('')
//     const nameRef = useRef('')
//     const [agree, setAgree] = useState(false)
//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

//     const handleRegister = event => {
//         const name = nameRef.current.value
//         const email = emailRef.current.value
//         const password = passwordRef.current.value;
//         const confirmPassword = confirmPasswordRef.current.value;

//         if(password !== confirmPassword){
//             toast('Your two passwords did not match');
//             return;
//         }
//         if(password.length <6){
//             toast('Password must be 6 characters or longer');
//             return;
//         }
//         createUserWithEmailAndPassword(email, password)
//         event.target.reset()
//     }


//     if (user) {
//         navigate('/home')
//     }

//     let errorElement;
//     if (error) {
//         errorElement = <p>{error.message}</p>
//     }
//     if (loading) {
//         return <Loading></Loading>
//     }
//     return (
//         <div>
//             <Form className='register-container' onSubmit={handleRegister}>
//                 <h1 className='register-title'>Register</h1>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Control type="text" name="name" placeholder="Enter Name" ref={nameRef} required />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">

//                     <Form.Control name="email" type="email" placeholder="Enter Your E-mail" ref={emailRef} required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">

//                     <Form.Control type="password" name="password" placeholder="Enter Your Password" ref={passwordRef} required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Control type="password" name="confirmPasswor" ref={confirmPasswordRef} placeholder="Confirm Password" required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox" onClick={() => setAgree(!agree)}><label htmlFor="" className={`ps-4  ${agree ? 'text-primary' : 'text-danger'}`}>Accept Genius car terms and condition</label>
//                     <Form.Check type="checkbox" />
//                 </Form.Group>


//                 {errorElement}

//                 <Button
//                     disabled={!agree}
//                     variant="info" type="submit" className='register-btn'>
//                     Submit
//                 </Button>
//                 <p className='text-center mt-2'>Already Have Account ? <Link to='/login'>
//                     Please Login
//                 </Link></p>

//                 <SocialLogin></SocialLogin>
//                 <ToastContainer />
//             </Form>


//         </div>
//     );
// };

// export default Register;