import db from "../db/index";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const getCheckInData = async (uid) => {
    const checkIns = {};
    const checkInsSnapshot = await getDocs(
        collection(db, "profiles", uid, "checkIns")
    );

    checkInsSnapshot.docs
        .reverse() // order the documents by date in descending order
        .slice(0, 7) // get the 7 most recent survey
        .forEach((doc) => {
            checkIns[doc.id] = doc.data();
        });

    const selectedDate = checkInsSnapshot.docs[checkInsSnapshot.docs.length - 1].id

    return {
        checkIns,
        selectedDate,
    };
}

const getAvatarMetaData = async (uid) => {
    const userDoc = await getDoc(doc(db, "profiles", uid));
    const avatar = userDoc.data().avatar;

    return {
        avatarColors: avatar.colors,
        avatarStyles: avatar.styles,
    }
}

export { getCheckInData, getAvatarMetaData };