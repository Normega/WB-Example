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

