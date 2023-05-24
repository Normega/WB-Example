import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div>
            <section className='hero-main-container'>
                <div className='hero-left-container'>
                    <h1 className='left-title'>Your Customized Wellness Buddy</h1>
                    <p className='left-subtitle'>
                        Measure your mental health and wellness with data-driven insights and
                        personalized feedback
                    </p>
                    <button className='started-button' onClick={() => navigate('/register')}>
                        Get Started
                    </button>
                </div>
                <div className='hero-right-container'>
                    <img src={process.env.PUBLIC_URL + '/worker.svg'} alt='Description' />
                </div>
            </section>
            <section className='hero-info-container'>
                <div className='info-card first'>
                    <img src='/images/avatar.png' alt='avatar' />
                    <h3>Customized Avatar</h3>
                </div>
                <div className='info-card second'>
                    <img src='/images/mood.png' alt='mood-timeline' />
                    <h3>Mood Tracking</h3>
                </div>
                <div className='info-card third'>
                    <img src='images/lightbulb.png' alt='lighbulb' />
                    <h3>Individualized Feedback</h3>
                </div>
            </section>
        </div>
    );
};

export default Hero;
