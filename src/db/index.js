import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const app = firebase
.initializeApp({
	apiKey: 'AIzaSyAsBl9fCyC0OL9Mhd3DQd_zzNp-vXmVqVQ',
	authDomain: 'wellbeing-49fed.firebaseapp.com',
	projectId: 'wellbeing-49fed',
	storageBucket: 'wellbeing-49fed.appspot.com',
	messagingSenderId: '533478110043',
	appId: '1:533478110043:web:bac15a8264558a8678607e',
});

const db = app.firestore();


export default db;

const { Timestamp } = firebase.firestore;
export { Timestamp };
