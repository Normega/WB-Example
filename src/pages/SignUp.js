import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register, registerWithGoogle } from '../api/auth';
import { FcGoogle } from 'react-icons/fc';
import '../styles/SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        password: '',
        confirmPassword: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = e => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        // TODO: Email Link Verification + Authentication with Google

        try {
            await register({
                email: formData.email,
                password: formData.password,
                fullName: formData.fullName,
            });
            setErrorMessage('');

            navigate('/avatar');
        } catch (error) {
            setErrorMessage(error);
            console.log(error);
        }
    };

    const handleGoogleRegister = async() => {
        try {
            const res = await registerWithGoogle();
            if (res.isNewUser) {
                navigate('/avatar');
            } else {
                navigate('/');
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <section className='signup-main'>
            <div className='signup-top'>
                <h1>Sign Up</h1>
                <p>Get started with an account with us!</p>
                <div className='signup-google' onClick={() => handleGoogleRegister()}>
                    <FcGoogle />
                    <span>Sign up with Google</span>
                </div>
            </div>
            <div className='or-line'>
                <p>or</p>
            </div>
            <div className='signup-bottom'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='email'
                        placeholder='Type Your Email'
                        name='email'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Type Your Full Name'
                        name='fullName'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Confirm Your Password'
                        name='confirmPassword'
                        onChange={handleChange}
                        required
                    />
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    <button>Confirm</button>
                </form>
                <div className='redirect'>
                    <p>Already have an account?</p>
                    <a href='#' onClick={() => navigate('/login')}>
                        Sign In
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
