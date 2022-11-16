import React, { useState, useCallback } from "react";
import { Navigate } from "react-router-dom";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import surveyJSON from "data/survey";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useStore } from "react-redux";
const db = firebase.firestore();

StylesManager.applyTheme("defaultV2");

const CheckIn = () => {
  const store = useStore();
  const uid = store.getState().auth.user?.uid;
  const [redirect, setRedirect] = useState(false);
  const survey = new Model(surveyJSON);

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results); // alert result in JSON format
    setRedirect(true); // redirect to main page
  }, []);

  survey.onComplete.add(alertResults);

  if (redirect) {
    db.collection("profiles").doc(uid).update({ checkin: true });
    return <Navigate to="/" />;
  }

  return (
    <div id="surveyElement">
      <Survey model={survey} />
    </div>
  );
};

export default CheckIn;
