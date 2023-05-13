import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    getAdditionalUserInfo
} from "firebase/auth";

import db from "db";

const createUserProfile = userProfile =>
    db.collection("profiles").doc(userProfile.uid).set(userProfile);

export const register = async ({ email, password, fullName }) => {
	const auth = getAuth();
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const { user } = res;
		const userProfile = {
      uid: user.uid,
      fullName,
      email,
      services: [],
      description: "",
      quarterlyCheckin: false,
      avatar: {
        styles: {
          earType: 1,
          eyeType: 1,
          eyebrowType: 1,
          faceType: 1,
          hairType: 1,
          mouthType: 1,
          noseType: 1,
          shirtType: 1,
        },
        colors: {
          avatarBackgroundColor: "#b0d1b9",
          eyeColor: "#99562a",
          eyebrowColor: "#99562a",
          hairColor: "#99562a",
          mouthColor: "#99562a",
          noseColor: "#99562a",
          shirtColor: "#5f3e09",
          skinColor: "#e29e68",
        },
      },
      created_avatar: false,
    };
		await createUserProfile(userProfile);
		return userProfile;
	} catch (error) {
		return Promise.reject(error.message);
	}
};

export const registerWithGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
      const res = await signInWithPopup(auth, provider);

      const details = getAdditionalUserInfo(res);
      const isNewUser = details.isNewUser;

      const user = res.user;
      const userProfile = {
          uid: user.uid,
          fullName: user.displayName,
          email: user.email,
          services: [],
          description: "",
          quarterlyCheckin: false,
          avatar: {
            styles: {
              earType: 1,
              eyeType: 1,
              eyebrowType: 1,
              faceType: 1,
              hairType: 1,
              mouthType: 1,
              noseType: 1,
              shirtType: 1,
            },
            colors: {
              avatarBackgroundColor: "#b0d1b9",
              eyeColor: "#99562a",
              eyebrowColor: "#99562a",
              hairColor: "#99562a",
              mouthColor: "#99562a",
              noseColor: "#99562a",
              shirtColor: "#5f3e09",
              skinColor: "#e29e68",
            },
          },
          created_avatar: false,
      };

      if (isNewUser) {
        await createUserProfile(userProfile);
      }

      return {
        ...userProfile,
        isNewUser,
      }
  } catch (error) {
      return Promise.reject(error.message);
  }
};

export const login = async ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).catch(error => Promise.reject(error.message));
};

export const logout = () => {
    const auth = getAuth();
    signOut(auth);
};

export const onAuthStateChange = onAuthCallback => {
    const auth = getAuth();
    onAuthStateChanged(auth, onAuthCallback);
};

export const getUserProfile = uid =>
    db
        .collection("profiles")
        .doc(uid)
        .get()
        .then(snapshot => ({ uid, ...snapshot.data() }));

// export const createUserRef = (uid) => db.doc('profiles/' + uid)
