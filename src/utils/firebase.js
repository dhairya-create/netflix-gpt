// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3v4b13L77HI2gNv1CtXEfI8kRApIoOcs",
  authDomain: "netflixgpt-4090d.firebaseapp.com",
  projectId: "netflixgpt-4090d",
  storageBucket: "netflixgpt-4090d.appspot.com",
  messagingSenderId: "392143035569",
  appId: "1:392143035569:web:cb4b2daedda61163771690",
  measurementId: "G-M79VR3QJJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();