const admin = require('firebase-admin');
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const googleapis = require('googleapis');
const handlebars = require('handlebars');
const util = require('util');
const fs = require('fs');
const path = require('path');

const oAuth2Client = new googleapis.google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const readFile = util.promisify(fs.readFile);

exports.sendEmail = functions.pubsub
    .schedule('every day 08:00')
    .timeZone('America/Toronto')
    .onRun(_ => {
        admin
            .firestore()
            .collection('profiles')
            .get()
            .then(async querySnapshot => {
                const html = await readFile(
                    path.resolve(__dirname, '..', 'views', 'index.html'),
                    'utf8',
                );
                const template = handlebars.compile(html);

                let emails = '';

                querySnapshot.docs.forEach((doc, idx) => {
                    const data = doc.data();
                    if (data.receiveEmail) {
                        emails += `${data.email}, `;
                    }
                });

                const accessToken = await oAuth2Client.getAccessToken();

                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        type: 'OAuth2',
                        user: 'uoft.wellness.buddy@gmail.com',
                        clientId: process.env.CLIENT_ID,
                        clientSecret: process.env.CLIENT_SECRET,
                        refreshToken: process.env.REFRESH_TOKEN,
                        accessToken: accessToken,
                    },
                });

                const message = {
                    from: 'Wellness Buddy <uoft.wellness.buddy@gmail.com>',
                    to: emails,
                    subject: 'Hello ✔',
                    text: 'Hello world?',
                    html: template({}),
                    attachments: [
                        {
                            filename: 'vector_1.png',
                            path: path.resolve(__dirname, '..', 'views', 'vector_1.png'),
                            cid: 'image1',
                        },
                        {
                            filename: 'vector_2.png',
                            path: path.resolve(__dirname, '..', 'views', 'vector_2.png'),
                            cid: 'image2',
                        },
                    ],
                };

                const result = await transporter.sendMail(message);

                console.log(result);
            });

        return null;
    });
