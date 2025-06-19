// Do not share publicly

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCerNR8B63vXbTjjSFMsQccMPois5IsgeU",
  authDomain: "auth-firebase-context-5b668.firebaseapp.com",
  projectId: "auth-firebase-context-5b668",
  storageBucket: "auth-firebase-context-5b668.firebasestorage.app",
  messagingSenderId: "126972261774",
  appId: "1:126972261774:web:11c76376191cde7e8ae0df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
