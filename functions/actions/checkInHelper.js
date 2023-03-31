const admin = require("firebase-admin");
const db = admin.firestore();
const functions = require("firebase-functions");
const mailHelper = require("./mailHelper");

/**
 * Send check in email to users every morning
 */
exports.sendCheckIn = functions.pubsub
    .schedule("every day 06:00")
    .timeZone("America/Toronto")
    .onRun(context => {
        db.collection("profiles")
            .get()
            .forEach(doc => {
                mailHelper.requestMail(doc.data.email);
            });
        return null;
    });

/**
 * Resets the variable stored in each user 'checkin' which indicates whether the user checked
 * in (true) or not (false). Reset this variable to false.
 */
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

/**
 *
 */
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
