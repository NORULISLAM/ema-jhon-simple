// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9lE70vIZtF7QpLEC7XBFyRYOnC-W87bA",
    authDomain: "ema-jhon-simple-45579.firebaseapp.com",
    projectId: "ema-jhon-simple-45579",
    storageBucket: "ema-jhon-simple-45579.appspot.com",
    messagingSenderId: "531435650172",
    appId: "1:531435650172:web:696f08fadbb4d7604d5df9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;