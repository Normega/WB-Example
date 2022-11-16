const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { getFirestore } = require("firebase-admin/firestore");
const cors = require("cors")({ origin: true });
import { collection, query, where } from "firebase/firestore";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
admin.initializeApp();
const db = getFirestore(admin);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "firebase@radlab.zone",
    pass: "MFtriangle",
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const mailOptions = {
      from: "firebase@radlab.zone",
      to: req.query.dest,
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
});

/*
 * a scheduled function to reset the check-in status every 6am in the local timezone
 */
exports.resetCheckin = functions.pubsub
  .schedule("every day 06:00")
  .timeZone("America/Toronto")
  .onRun((context) => {
    admin
      .firestore()
      .collection("profiles")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({ checkin: false });
        });
      });
    return null;
  });
