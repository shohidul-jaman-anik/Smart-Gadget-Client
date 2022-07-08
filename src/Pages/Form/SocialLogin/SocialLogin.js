import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css'
import Loading from '../../Share/Loading/Loading';
import auth from '../../../firebase.init';


const SocialLogin = () => {
    const navigate = useNavigate('')
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'> Error: {error?.message} {error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home')
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='Social-container'>

                <div className='horizontal-style '>
                    <div className='line'></div>
                    <div><p className='or'>or</p></div>
                    <div className='line'></div>
                </div>
            </div>
            {errorElement}
            <div>
                <button className='third-party-google-btn py-2 px-lg-5 mx-auto d-block' onClick={() => signInWithGoogle()}>Login With Google</button>
                <button
                onClick={() => signInWithGithub()}
                className='btn btn-dark d-block mx-auto mt-2'>
                {/* <img style={{ height: '30px' }} src={githubLogo} alt="" /> */}
                <span className='px-2'> Github Sign in </span>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;