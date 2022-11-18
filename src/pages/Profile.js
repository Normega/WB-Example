import React, { useState, useEffect, useRef } from "react";
import {sendMail} from "actions"
import { set } from "react-hook-form";
import { getFunctions, httpsCallable } from "firebase/functions";

export default function Profile() {

  return (
    <div>
      <h1>I am Profile Page </h1>
      <button onClick={sendMail}> Click button to send email </button>
    </div>
  );
}
