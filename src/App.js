import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Navbar loadFresh id='navbar-main' />
            <Navbar id='navbar-clone' />
            <Routes />
        </Router>
    );
};

export default App;
