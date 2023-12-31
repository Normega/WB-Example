import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/store';
import { logout } from '../api/auth';

const Navbar = props => {
    const { setUser, setIsAuth, isAuth } = useAuthStore(store => store);
    const navigate = useNavigate();

    const handleLogout = async() => {
        await logout();
        setUser(null);
        setIsAuth(false);
        navigate('/');
    };

    return (
        <nav
            id={props.id || ''}
            className='navbar is-fresh is-transparent no-shadow'
            role='navigation'
            aria-label='main navigation'>
            <div className='container'>
                <div className='navbar-brand'>
                    <Link to='/' className='navbar-item' href='https://cssninja.io'>
                        <div className='title'>Wellness Buddy</div>
                    </Link>

                    <a className='navbar-item is-hidden-desktop is-hidden-tablet'>
                        <div
                            id='menu-icon-wrapper'
                            className='menu-icon-wrapper'
                            style={{ visibility: 'visible' }}>
                            <svg width='1000px' height='1000px'>
                                <path
                                    className='path1'
                                    d='M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800'></path>
                                <path className='path2' d='M 300 500 L 700 500'></path>
                                <path
                                    className='path3'
                                    d='M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200'></path>
                            </svg>
                            <button id='menu-icon-trigger' className='menu-icon-trigger'></button>
                        </div>
                    </a>

                    <a
                        role='button'
                        className='navbar-burger'
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbar-menu'>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>

                <div id='navbar-menu' className='navbar-menu is-static'>
                    <div className='navbar-end'>
                        <Link to='/' className='navbar-item is-secondary'>
                            Home
                        </Link>
                        {isAuth && (
                            <React.Fragment>
                                <Link to='/profile' className='navbar-item is-secondary'>
                                    Profile
                                </Link>
                                <Link to='/dashboard' className='navbar-item is-secondary'>
                                    Dashboard
                                </Link>
                                <Link to='/avatar' className='navbar-item is-secondary'>
                                    Avatar
                                </Link>
                            </React.Fragment>
                        )}
                        {!isAuth && (
                            <React.Fragment>
                                <Link
                                    to='/login'
                                    className='navbar-item is-secondary modal-trigger'
                                    data-modal='auth-modal'>
                                    Log in
                                </Link>
                                <Link to='/register' className='navbar-item'>
                                    <span className='button signup-button rounded secondary-btn raised'>
                                        Sign up
                                    </span>
                                </Link>
                            </React.Fragment>
                        )}
                        {isAuth && (
                            <div onClick={handleLogout} className='navbar-item'>
                                <span className='button signup-button is-danger rounded raised'>
                                    Logout
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
