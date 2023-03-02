import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

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
                    <button className='started-button' onClick={() => navigate("/register")}>
                        Get Started
                    </button>
                </div>
                <div className='hero-right-container'>
                    <img src={process.env.PUBLIC_URL + "/worker.svg"} alt='Description' />
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
//     <section className='hero is-default is-bold'>
//         <div className='hero-body'>
//             <div className='container'>
//                 <div className='columns is-vcentered'>
//                     <div className='column is-5 is-offset-1 landing-caption'>
//                         <h1 className='title is-1 is-bold is-spaced'>
//                             Your Customized Wellness Buddy
//                         </h1>
//                         {/* <h2 className='subtitle is-5 is-muted'>
//                             Lorem ipsum sit dolor amet is a dummy text used by typography industry{" "}
//                         </h2> */}
//                         <p>
//                             <a className='button cta rounded primary-btn raised'>Get Started</a>
//                         </p>
//                     </div>
//                     <div className='column is-5 is-offset-1'>
//                         <figure className='image is-4by3'>
//                             <img src={process.env.PUBLIC_URL + "/worker.svg"} alt='Description' />
//                         </figure>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
// );

export default Hero;
