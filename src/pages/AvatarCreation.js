import withAuthorization from "components/hoc/withAuthorization";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const AvatarCreation = () => {
  const [redirect, setRedirect] = useState(false);

  const setAvatar = () => {
    // props.history.push('/')
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to="/definition" />;
  }

  return (
    <div>
      <p>This will be for an avatar creation</p>
      <button onClick={setAvatar}>Go to Definition</button>
    </div>
  );
};

export default withAuthorization(AvatarCreation);
