const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");

const admin = require("firebase-admin");
const cors = require("cors")({
    origin: true,
    allowedHeaders: "Content-Type, Authorization",
    allowedMethods: "GET, POST",
});
// Are the below neccessary?
// admin.initializeApp();
// const db = admin.firestore();

function prepareMail (req, res) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
            user: "firebase@radlab.zone",
            pass: "MFtriangle",
        }
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
            return res.send("Sended, requested email: " + req.body.dest);
        });
    });
}

async function requestMail (email) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //    add more data below...
        body: JSON.stringify({ dest: email }),
        // params: JSON.stringify({ dest: "radlab.noreply@gmail.com" }),
    };
    //    change the POST link below
    await fetch("http://localhost:5001/wellbeing-49fed/us-central1/sendMail", requestOptions)
        .then(res => {
            console.log(res.text());
            // console.log(res.text())
            // return "this works!";
            return res.text();
        })
        .then(data => {
            console.log(data);
            // console.log(data.json());
        });
    // return await response.text();
}
exports.requestMail = requestMail;

exports.sendMail = functions.https.onRequest((req, res) => {
    prepareMail(req, res);
});
// Iterates thrur database and collects emails
function collectEmails () {
    const data = [];
    admin
    .firestore()
    .collection("profiles")
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            data.push(doc.data());
        });
    });
    return data;
}
// testing
exports.collectEmails = collectEmails;

exports.weeklySendMail = functions.pubsub
    .schedule("every day 06:00")
    .timeZone("America/Toronto")
    .onRun(context => {
        // return requestMail("radlab.noreply@gmail.com");
        collectEmails().forEach(doc => {
            requestMail(doc.email);
        });
    });
