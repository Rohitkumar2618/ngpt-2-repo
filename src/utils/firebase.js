// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDbNXajEcXRCIewIl_IihWz_1fZ7G1sNQ",
  authDomain: "ngpt1-b4b73.firebaseapp.com",
  projectId: "ngpt1-b4b73",
  storageBucket: "ngpt1-b4b73.appspot.com",
  messagingSenderId: "414045537548",
  appId: "1:414045537548:web:7b67088596aac4bfbf3529",
  measurementId: "G-9D2W9CRZJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
