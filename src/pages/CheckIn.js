import React, { useState, useCallback, useEffect } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { getSurveyJSON } from "data/survey";
import { useStore } from "react-redux";
import db from "../db/index";
import getDateString from "../helpers/getDateString";

StylesManager.applyTheme("defaultV2");

const CheckIn = () => {
  const store = useStore();
  const uid = store.getState().auth.user?.uid;
  const [redirect, setRedirect] = useState(false);
  const [isQuarterlyCheckin, setIsQuarterlyCheckin] = useState(false);
  const [surveyJSON, setSurveyJSON] = useState({});

  const survey = new Model(surveyJSON);

  const addCheckInResult = useCallback(
    async (sender) => {
      const results = sender.data;

      // store quarterly check-in data to quarterlyCheckIns sub-collection
      if (isQuarterlyCheckin) {
        const quarterlySurveyJSON = (({
          wellbeingDefinition,
          wellbeingDomainRanking,
          reminder,
        }) => ({
          wellbeingDefinition,
          wellbeingDomainRanking,
          reminder,
          date: new Date().toLocaleDateString(),
        }))(results);

        await setDoc(
          doc(db, "profiles", uid, "quarterlyCheckIns", getDateString()),
          quarterlySurveyJSON
        );

        await updateDoc(doc(db, "profiles", uid), {
          reminder: results.reminder,
        });
      }

      // store daily check-in data to checkIns sub-collection
      await setDoc(doc(db, "profiles", uid, "checkIns", getDateString()), {
        ...results,
      });

      await updateCheckInStatus();

      setRedirect(true);
    },
    [uid, isQuarterlyCheckin]
  );

  const updateCheckInStatus = async () => {
    // if the user has finished quarterly check-in, update the field from false to true
    if (isQuarterlyCheckin) {
      await updateDoc(doc(db, "profiles", uid), {
        quarterlyCheckin: true,
      });
    }

    // if the user has finished daily check-in, update the field from false to true
    await updateDoc(doc(db, "profiles", uid), {
      checkin: true,
    });
  };

  const updateQuery = async (results) => {
    const timeStamp = Math.floor(Date.now() / 3.6e6).toString();
    const docRef = doc(db, "responses", timeStamp);
    const docSnap = await getDoc(docRef);
    console.log(docSnap);
    if (docSnap.exists()) {
      var new_arr = docSnap.data().arr;
      new_arr.push(results.stress);
      var new_avg =
        (docSnap.data().avg * (new_arr.length - 1) + results.stress) /
        new_arr.length;
      var variation_param = 0;
      for (let i = 0; i < new_arr.length; i++) {
        variation_param += Math.pow(new_arr[i] - new_avg, 2);
      }
      variation_param = variation_param / new_arr.length;
      setDoc(docRef, {
        arr: new_arr,
        avg: new_avg,
        variation: Math.pow(variation_param, 1 / 2),
      });
    } else {
      setDoc(doc(db, "responses", timeStamp), {
        arr: [results.stress],
        avg: results.stress,
        variation: 0,
      });
    }
  };

  useEffect(() => {
    // load survey JSON to either include or not include wellbeing quarterly survey
    const loadSurveyJSON = async () => {
      const docRef = doc(db, "profiles", uid);
      const docSnap = await getDoc(docRef);
      const quarterlyCheckin = docSnap.data().quarterlyCheckin;
      setIsQuarterlyCheckin(!quarterlyCheckin);
      setSurveyJSON(getSurveyJSON(quarterlyCheckin));
    };

    loadSurveyJSON();
  }, [uid, isQuarterlyCheckin]);

  survey.onComplete.add(addCheckInResult);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div id="surveyElement">
      <Survey model={survey} />
    </div>
  );
};

export default CheckIn;
