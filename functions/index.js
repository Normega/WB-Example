// const functions = require("firebase-functions");
// const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
// const cors = require("cors")({
//     origin: true,
//     allowedHeaders: "Content-Type, Authorization",
//     allowedMethods: "GET, POST",
// });

admin.initializeApp();
// const db = admin.firestore();

const mailHelper = require("./actions/mailHelper");
const chInHelper = require("./actions/checkInHelper");

// Export functions
exports.sendMail = mailHelper.sendMail;
exports.weeklySendMail = mailHelper.weeklySendMail;
// testing
// exports.collectEmails = mailHelper.collectEmails;


exports.sendCheckIn = chInHelper.sendCheckIn;
exports.resetCheckin = chInHelper.resetCheckin;
exports.resetQuarterlyCheckin = chInHelper.resetQuarterlyCheckin;


// exports.sendCheckIn = functions.pubsub
//     .schedule("every day 06:00")
//     .timeZone("America/Toronto")
//     .onRun(context => {
//         db.collection("profiles")
//             .get()
//             .forEach(doc => {
//                 requestMail(doc.data.email);
//             });
//         return null;
//     });

// exports.resetCheckin = functions.pubsub
//     .schedule("every day 06:00")
//     .timeZone("America/Toronto")
//     .onRun(context => {
//         admin
//             .firestore()
//             .collection("profiles")
//             .get()
//             .then(querySnapshot => {
//                 querySnapshot.forEach(doc => {
//                     doc.ref.update({ checkin: false });
//                 });
//             });
//         return null;
//     });

// exports.resetQuarterlyCheckin = functions.pubsub
//     .schedule("0 6 1 1,4,7,10 *")
//     .timeZone("America/Toronto")
//     .onRun(context => {
//         admin
//             .firestore()
//             .collection("profiles")
//             .get()
//             .then(querySnapshot => {
//                 querySnapshot.forEach(doc => {
//                     doc.ref.update({ quarterlyCheckin: false });
//                 });
//             });
//         return null;
//     });

