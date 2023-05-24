import React from "react";
import Navbar from 'components/Navbar'
import Routes from "Routes";

const ServiceApp = () => {
    return (
        <React.Fragment>
            <Navbar
                loadFresh
                id="navbar-main"
            />
            <Navbar
                id='navbar-clone' />
            <Routes />
        </React.Fragment>
    )
}

export default ServiceApp;