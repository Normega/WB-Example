import '../styles/LogIn.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, loginWithGoogle } from 'actions';
import { doc, getDoc } from 'firebase/firestore';
import onlyGuest from 'components/hoc/onlyGuest';
import { FcGoogle } from 'react-icons/fc';
import db from '../db/index';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

  const handleRedirect = async (uid) => {
    const docRef = doc(db, 'profiles', uid);
    const docSnap = await getDoc(docRef);

    const checkInStatus = docSnap.data().checkin;
    const avatarStatus = docSnap.data().created_avatar;

    if (!checkInStatus) {
      navigate('/checkin');
    } else if (!avatarStatus) {
      navigate('/avatar');
    } else {
      navigate('/');
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const uid = await login(formData);
      await handleRedirect(uid);
    } catch (e) {
      setErrorMessage(e);
    }
  };

  const handleGoogleLogin = async () => {
    const uid = await loginWithGoogle();
    await handleRedirect(uid);
  }

  return (
    <section className='login-main'>
      <div className='login-top'>
        <h1>Log In</h1>
        <p>Please log in to proceed with our service!</p>
        <div className='login-google' onClick={handleGoogleLogin}>
          <FcGoogle />
          <span>Sign In with Google</span>
        </div>
      </div>
      <div className='or-line'>
        <p>or</p>
      </div>
      <div className='login-bottom'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            name='email'
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
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <button>Confirm</button>
        </form>
        <div className='redirect'>
          <p>Don't have an account?</p>
          <a href='' onClick={() => navigate('/register')}>
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default onlyGuest(Login);
