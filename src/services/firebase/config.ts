import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_API_APPID
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export default app;