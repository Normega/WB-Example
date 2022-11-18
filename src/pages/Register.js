/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import RegisterForm from "components/auth/RegisterForm";
import { register } from "actions";
import { useToasts } from "react-toast-notifications";
import { Navigate } from "react-router-dom";
import onlyGuest from "components/hoc/onlyGuest";

// import { withRouter } from 'react-router-dom'

const Register = () => {
  const [redirect, setRedirect] = useState(false);
  const { addToast } = useToasts();

  const registerUser = (userData) => {
    // props.history.push('/')
    register(userData).then(
      (_) => {
        setRedirect(true);
      },
      (errorMessage) =>
        addToast(errorMessage, {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        })
    );
  };
  if (redirect /*&& user has not set an avatar */) {
    return <Navigate to="/avatar-creation" />;
  }

  return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Register</h3>
          <p className="subtitle has-text-grey">Please Register to proceed.</p>
          <div className="box">
            {/* <figure className="avatar">
              <img src={require('./user_avatar.png')} alt="user_avatar"/>
            </figure> */}
            <RegisterForm onRegister={registerUser} />
          </div>
          <p className="has-text-grey">
            <a>Sign In With Google</a>&nbsp;
            <a href="/">Sign Up</a> &nbsp;·&nbsp;
          </p>
        </div>
      </div>
    </div>
  );
};

// export default withRouter(Register)
export default onlyGuest(Register);
