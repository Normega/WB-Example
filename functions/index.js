const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccoutKey.json');

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const checkIn = require('./actions/checkIn');
const mail = require('./actions/mail');

exports.sendEmail = mail.sendEmail;
exports.resetCheckin = checkIn.resetCheckin;
exports.resetQuarterlyCheckin = checkIn.resetQuarterlyCheckin;
