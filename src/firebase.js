// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// process.env.REACT_APP_FIREBASE_KEY
// console.log(process.env.REACT_APP_FIREBASE_KEY);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "eshop-90290.firebaseapp.com",
  projectId: "eshop-90290",
  storageBucket: "eshop-90290.appspot.com",
  messagingSenderId: "752273320035",
  appId: "1:752273320035:web:25990ba784aa3dc7e17056",
  measurementId: "G-T10J1F2W0S",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
