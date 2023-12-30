// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDe4RD_OQWl5TYYOZqknb0AhtLnfn1VSLQ",
    authDomain: "kd-authentication.firebaseapp.com",
    projectId: "kd-authentication",
    storageBucket: "kd-authentication.appspot.com",
    messagingSenderId: "714103070630",
    appId: "1:714103070630:web:1b7fc20ffa5aac1aa7f967",
    measurementId: "G-HK4HV6YTZB"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase auth
const firebaseAuth = getAuth(firebaseApp);

// Initialize Firebase database
const firebaseDb = getFirestore(firebaseApp);

export { firebaseApp, firebaseAuth, firebaseDb};
