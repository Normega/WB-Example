const admin = require('firebase-admin');
const functions = require('firebase-functions');

/**
 * Resets the variable stored in each user 'checkin' which indicates whether the user checked
 * in (true) or not (false). Reset this variable to false.
 */
exports.resetCheckin = functions.pubsub
    .schedule('every day 06:00')
    .timeZone('America/Toronto')
    .onRun(_context => {
        admin
            .firestore()
            .collection('profiles')
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
    .schedule('0 6 1 1,4,7,10 *')
    .timeZone('America/Toronto')
    .onRun(_context => {
        admin
            .firestore()
            .collection('profiles')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({ quarterlyCheckin: false });
                });
            });
        return null;
    });
