import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    getAdditionalUserInfo,
} from 'firebase/auth';
import { getUserDefaultProfile } from '../data/userProfile';
import db from '../db/index';

const createUserProfile = userProfile =>
    db.collection('profiles').doc(userProfile.uid).set(userProfile);

const register = async({ email, password, fullName }) => {
    const auth = getAuth();
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const { user } = res;
        const userProfile = getUserDefaultProfile(user.uid, fullName, email);
        await createUserProfile(userProfile);
        return userProfile;
    } catch (error) {
        return Promise.reject(error.message);
    }
};

const registerWithGoogle = async() => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
        const res = await signInWithPopup(auth, provider);

        // TODO: need to handle the case where the user hasn't signed up yet but trying to log in with google

        const details = getAdditionalUserInfo(res);
        const isNewUser = details.isNewUser;

        const user = res.user;
        const userProfile = getUserDefaultProfile(user.uid, user.displayName, user.email);

        if (isNewUser) {
            await createUserProfile(userProfile);
        }

        return {
            ...userProfile,
            isNewUser,
        };
    } catch (error) {
        return Promise.reject(error.message);
    }
};

const login = async({ email, password }) => {
    const auth = getAuth();

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        return userCredentials.user;
    } catch {
        return Promise.reject(new Error('Incorrect email or password'));
    }
};

const loginWithGoogle = async() => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
        const res = await signInWithPopup(auth, provider);
        const details = getAdditionalUserInfo(res);
        const isNewUser = details.isNewUser;
        const user = res.user;
        const userProfile = getUserDefaultProfile(user.uid, user.displayName, user.email);

        if (isNewUser) {
            await createUserProfile(userProfile);
        }

        return user;
    } catch (error) {
        Promise.reject(error.message);
    }
};

const logout = () => {
    const auth = getAuth();
    signOut(auth);
};

export { register, registerWithGoogle, login, loginWithGoogle, logout };
