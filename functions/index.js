const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const express = require("express");
// const app = express();
const cors = require("cors")({origin: true, allowedHeaders:
  "Content-Type, Authorization", allowedMethods: "GET, POST" });
admin.initializeApp();

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

// scheduling email
// exports.emailSchedule = functions.pubsub.schedule("every 1 week")
//     .onRun((context) => {
//       this.sendMail();
//       console.log(context);
//       return null;
//     });