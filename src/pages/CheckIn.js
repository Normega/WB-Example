import React, { useState, useCallback } from "react";
import { collection, doc, addDoc, updateDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import surveyJSON from "data/survey";
import { useStore } from "react-redux";
import db from "../db/index";

StylesManager.applyTheme("defaultV2");

const CheckIn = () => {
	const store = useStore();
	const uid = store.getState().auth.user?.uid;
	const [redirect, setRedirect] = useState(false);
	const survey = new Model(surveyJSON);

	const addCheckInResult = useCallback(
		async sender => {
			const results = sender.data;
			await addDoc(collection(db, "profiles", uid, "checkIns"), {
				...results,
				date: new Date().toLocaleDateString(),
			});
			setRedirect(true);
		},
		[uid]
	);

	const updateCheckInStatus = async () => {
		await updateDoc(doc(db, "profiles", uid), {
			checkin: true,
		});
	};

	survey.onComplete.add(addCheckInResult);

	if (redirect) {
		updateCheckInStatus();
		return <Navigate to='/' />;
	}

	return (
		<div id='surveyElement'>
			<Survey model={survey} />
		</div>
	);
};

export default CheckIn;
