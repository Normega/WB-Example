const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
import { collection, query, where } from "firebase/firestore";
const cors = require("cors")({origin: true, allowedHeaders:
  "Content-Type, Authorization", allowedMethods: "GET, POST" });
const { getFirestore } = require("firebase-admin/firestore");

admin.initializeApp();
const db = getFirestore(admin);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "firebase@radlab.zone",
    pass: "MFtriangle",
  },
});
function prepareMail(req, res) {
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
  })

}

exports.sendMail = functions.https.onRequest((req, res) => {
  prepareMail(req, res);
});

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
