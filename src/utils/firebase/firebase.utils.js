import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const Provider = new GoogleAuthProvider();

Provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, Provider);

export const db = getFirestore();

const createUserDocFromAuth = async (userAuth) => {};
