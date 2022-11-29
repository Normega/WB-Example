// import { collection, query, where } from "firebase/firestore";

// import { getFirestore } from "firebase-admin/firestore";
// import * as actions from "./actions/index";
// import * as functions from 'firebase-functions'
// import * as nodemailer from "nodemailer";
// import * as cors from "cors";
// import {initializeApp} from "firebase-admin";
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
const cors = require("cors")({
    origin: true,
    allowedHeaders: "Content-Type, Authorization",
    allowedMethods: "GET, POST",
});
// const actions = require("../src/actions")
admin.initializeApp();
const db = admin.firestore();

function prepareMail (req, res) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
            user: "firebase@radlab.zone",
            pass: "MFtriangle",
        },
    });

    cors(req, res, () => {
        const mailOptions = {
            from: "firebase@radlab.zone",
            to: req.body.dest,
            subject: "Wellness Buddy Check-in",
            html: `<h1 style="font-size: 32px;"> Testing Testing </h1>
                <br />
            `,
        };
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send("Sended");
        });
    });
}

async function requestMail (email) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dest: email }),
        // params: JSON.stringify({ dest: "radlab.noreply@gmail.com" }),
    };
    await fetch("http://localhost:5000/wellbeing-49fed/us-central1/sendMail", requestOptions)
        .then(res => {
            console.log(res);
            // console.log(res.text())
            return res.text();
        })
        .then(data => {
            console.log(data);
            // console.log(data.json());
        });
}

exports.sendMail = functions.https.onRequest((req, res) => {
    prepareMail(req, res);
});

exports.sendCheckIn = functions.pubsub
    .schedule("every day 06:00")
    .timeZone("America/Toronto")
    .onRun(context => {
        db.collection("profiles")
            .get()
            .forEach(doc => {
                requestMail(doc.data.email);
            });
        return null;
    });

exports.resetCheckin = functions.pubsub
    .schedule("every day 06:00")
    .timeZone("America/Toronto")
    .onRun(context => {
        admin
            .firestore()
            .collection("profiles")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({ checkin: false });
                });
            });
        return null;
    });

exports.resetQuarterlyCheckin = functions.pubsub
    .schedule("0 6 1 1,4,7,10 *")
    .timeZone("America/Toronto")
    .onRun(context => {
        admin
            .firestore()
            .collection("profiles")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({ quarterlyCheckin: false });
                });
            });
        return null;
    });
