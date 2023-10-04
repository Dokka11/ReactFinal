// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCntLqzxHfslZOGT5ff7uT2p5dGY6xGYHU",
  authDomain: "csgomarket-790bd.firebaseapp.com",
  projectId: "csgomarket-790bd",
  storageBucket: "csgomarket-790bd.appspot.com",
  messagingSenderId: "488363753922",
  appId: "1:488363753922:web:21a599686ab71295b3965b",
  measurementId: "G-ESCZL423SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);