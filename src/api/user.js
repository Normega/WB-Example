import db from '../db/index';
import { collection, getDocs, getDoc, doc, updateDoc } from 'firebase/firestore';
import formatDateString from '../helpers/formatDateString';
import { calculateMean, calculateSD } from '../helpers/calculateDistribution';

const getCheckInData = async uid => {
    const checkIns = {};
    const checkInsSnapshot = await getDocs(collection(db, 'profiles', uid, 'checkIns'));

    checkInsSnapshot.docs
        .reverse() // order the documents by date in descending order
        .slice(0, 7) // get the 7 most recent survey
        .forEach(doc => {
            checkIns[doc.id] = doc.data();
        });

    const selectedDate = checkInsSnapshot.docs[checkInsSnapshot.docs.length - 1].id;

    return {
        checkIns,
        selectedDate,
    };
};

const getCheckInSurveyData = async uid => {
    const moods = {};
    const stress = {};
    const awareness = {};
    const reactivity = {};
    const reappraisal = {};

    const querySnapshot = await getDocs(collection(db, 'profiles', uid, 'checkIns'));

    querySnapshot.forEach(doc => {
        moods[formatDateString(doc.id)] = doc.data().mood;
        stress[formatDateString(doc.id)] = doc.data().stress;
        awareness[formatDateString(doc.id)] = doc.data().thoughts.AW1;
        reactivity[formatDateString(doc.id)] = doc.data().thoughts.RA1;
        reappraisal[formatDateString(doc.id)] = doc.data().thoughts.RP1;
    });

    return {
        moods,
        stress,
        awareness,
        reactivity,
        reappraisal,
    };
};

const getCheckInStatus = async uid => {
    const docSnap = await getDoc(doc(db, 'profiles', uid));
    return docSnap.data().checkin;
};

const getEmailPreference = async uid => {
    const docSnap = await getDoc(doc(db, 'profiles', uid));
    return docSnap.data().receiveEmail;
};

const getMoodStressZScores = async uid => {
    // retrieve all mood and stress data across all users
    const allMoodData = [];
    const allStressData = [];
    const profiles = await getDocs(collection(db, 'profiles'));

    for (const profile of profiles.docs) {
        const checkIns = await getDocs(collection(db, 'profiles', profile.id, 'checkIns'));
        checkIns.forEach(doc => {
            allMoodData.push(doc.data().mood);
            allStressData.push(doc.data().stress);
        });
    }

    // calculate mean and standard deviation
    const moodMean = calculateMean(allMoodData);
    const moodSD = calculateSD(allMoodData, moodMean);
    const stressMean = calculateMean(allStressData);
    const stressSD = calculateSD(allStressData, stressMean);

    // calculate z-score for each user's mood and stress data
    const zScores = {};

    const userCheckIns = await getDocs(collection(db, 'profiles', uid, 'checkIns'));
    const latestMood = userCheckIns.docs[userCheckIns.docs.length - 1].data().mood;
    const latestStress = userCheckIns.docs[userCheckIns.docs.length - 1].data().stress;

    zScores.mood = (latestMood - moodMean) / moodSD;
    zScores.stress = (latestStress - stressMean) / stressSD;

    return zScores;
};

const getAvatarMetaData = async uid => {
    const userDoc = await getDoc(doc(db, 'profiles', uid));
    const avatar = userDoc.data().avatar;

    return {
        avatarColors: avatar.colors,
        avatarStyles: avatar.styles,
    };
};

const updateEmailPreference = async({ isToggled, uid }) => {
    await updateDoc(doc(db, 'profiles', uid), {
        receiveEmail: !isToggled,
    });
};

export {
    getCheckInData,
    getAvatarMetaData,
    getCheckInSurveyData,
    getCheckInStatus,
    getEmailPreference,
    getMoodStressZScores,
    updateEmailPreference,
};
