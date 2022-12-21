import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAghvexY7BZBrb9uBfAme2mazeOZufrqFk",
  authDomain: "crwn-clothing-project-4676a.firebaseapp.com",
  projectId: "crwn-clothing-project-4676a",
  storageBucket: "crwn-clothing-project-4676a.appspot.com",
  messagingSenderId: "313173252701",
  appId: "1:313173252701:web:36b2a86282c5b236ee4bb4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userRefDoc = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userRefDoc);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRefDoc, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  return userRefDoc;
};
