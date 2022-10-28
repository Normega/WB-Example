import React from "react";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "firebase@radlab.zone",
    pass: "MFtriangle",
  },
});

export const sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const mailOptions = {
      from: "firebase@radlab.zone",
      to: req.query.dest, // sending mail to email of user
      subject: "Wellness Check in ",
      html: `<h1 style="font-size: 36px;">testing testing testing </h1>
                <br />
            `, // email content in HTML
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sended");
    });
  });
});
