import withAuthorization from "components/hoc/withAuthorization";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const CheckIn = () => {
  const [redirect, setRedirect] = useState(false);
  // Possible Design Decision: an array of question pages
  const onCheck = () => {
    // props.history.push('/')
    setRedirect(true);
    // Backend Work with collected data
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <p>This will be for the check-in Questions.</p>
      <button onClick={onCheck}>Submit</button>
    </div>
  );
};

export default CheckIn;
