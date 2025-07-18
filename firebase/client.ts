// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA5k5maESRYko_pwVD1xmyo38_YpjwEF5g",
  authDomain: "prepwise-18b7f.firebaseapp.com",
  projectId: "prepwise-18b7f",
  storageBucket: "prepwise-18b7f.firebasestorage.app",
  messagingSenderId: "783765869899",
  appId: "1:783765869899:web:3d93b0298fc0a29dcf84ce",
  measurementId: "G-SEWNYN45EH"
};

// Initialize Firebase
const app =  !getApps().length ? initializeApp(firebaseConfig) :getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);