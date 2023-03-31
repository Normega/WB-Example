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

/**
 * set up the email sending server; request of string that is valid email, the pre-setup email will be sent to the requested email
 * @param {*} req
 * @param {*} res
 */
function prepareMail (req, res) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
            user: "radlab.noreply@gmail.com",
            pass: "zdxvgdwcxtqodfyg",
        },
    });
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
            return res.send("Sended, requested email: " + req.query.dest);
        });
    });
}

/**
 * Send email
 * @param {*} email
 */
async function requestMail (email) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //    add more data below...
        query: JSON.stringify({ dest: email }),
        // params: JSON.stringify({ dest: "radlab.noreply@gmail.com" }),
    };
    //    Production: change the POST link below
    await fetch("http://127.0.0.1:5001/wellbeing-49fed/us-central1/sendMail", requestOptions)
        .then(res => {
            console.log(res.text());
            // console.log(res.text())
            return "this works!";
            // return res.text();
        })
        .then(data => {
            console.log(data);
            // console.log(data.json());
        });
    // return await response.text();
}
exports.requestMail = requestMail;

// build the https function for sending the emails
exports.sendMail = functions.https.onRequest((req, res) => {
    prepareMail(req, res);
});

/**
 * Returns the array that contains the email address of all users.
 * @returns Array
 */
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
/**
 * Runs `collectEmails` function in the server
 *
 */
exports.collectEmails = functions.https.onRequest((req, res) => {
    res.send(collectEmails());
});

/**
 * Send email to the user every day at 6am.
 */
exports.weeklySendMail = functions.pubsub
    .schedule("every day 06:00")
    .timeZone("America/Toronto")
    .onRun(context => {
        // return requestMail("dunkim865@gmail.com");
        // return collectEmails();
        console.log(collectEmails()[0]);
        collectEmails().forEach(doc => {
            console.log(doc);
            requestMail(doc.email);
        });
        return "daily check-in emails successfully sent";
    });
