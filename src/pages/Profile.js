import React, { useState, useEffect, useRef } from "react";
import {requestMail} from "actions"
import { set } from "react-hook-form";
import { getFunctions, httpsCallable } from "firebase/functions";
import db, {app} from 'db'

export default function Profile() {

  // const functions = getFunctions(app);
  // const test = httpsCallable(functions, 'test');
  // test({ message: "messageText" })
  //   .then((result) => {
  //     console.log("test function ran successful")

  //   });
  // Below for testing purpose
  const sendMail = () => {
    requestMail("radlab.noreploy@gmail.com");
  }

  return (
    <div>
      <h1>I am Profile Page </h1>
      <button onClick={sendMail}> Click button to send email </button>
    </div>
  );
}
