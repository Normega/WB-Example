import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";

import db from 'db'


const createUserProfile = (userProfile) => 
  db.collection('profiles')
    .doc(userProfile.uid)
    .set(userProfile)


export const register = async ({email, password, fullName}) => {
    const auth = getAuth();
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const { user } = res
        const userProfile = { uid: user.uid, fullName, email, services: [], description: ''}
        await createUserProfile(userProfile)
        return userProfile
    } catch(error){
        return Promise.reject(error.message)
    }
}

export const login = async ({email, password}) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .catch(error => Promise.reject(error.message))
}

export const logout = () => {
    const auth = getAuth();
    signOut(auth)
}

export const onAuthStateChange = (onAuthCallback) => {
    const auth = getAuth();
    onAuthStateChanged(auth, onAuthCallback)
}

export const getUserProfile = uid =>
  db.collection('profiles')
    .doc(uid)
    .get()
    .then(snapshot => ({uid, ...snapshot.data()}))

// export const createUserRef = (uid) => db.doc('profiles/' + uid)
