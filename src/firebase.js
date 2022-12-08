
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

import { initializeApp } from 'firebase/app';
import {
    getAuth
  } from 'firebase/auth';
import {
    getFirestore
} from 'firebase/firestore'
// import { getStorage } from "firebase/storage";


// const app=initializeApp({
//     apiKey: process.env.React_App_Firebase_Api_Key,
//     authDomain: process.env.React_App_Firebase_Auth_Domain,
//     projectId: process.env.React_App_Firebase_PROJECT_ID,
//     storageBucket: process.env.React_App_Firebase_STORAGE_BUCKET,
//     messagingSenderId: process.env.React_App_Firebase_MESSAGING_SENDER_ID,
//     appId: process.env.React_App_Firebase_APP_ID,
// })


const firebaseConfig = {
  apiKey: "AIzaSyCziXzUOLt2CzUDYjOZV0Wldu8gmp4jVAE",
  authDomain: "embifi.firebaseapp.com",
  projectId: "embifi",
  storageBucket: "embifi.appspot.com",
  messagingSenderId: "888713229097",
  appId: "1:888713229097:web:74ed5b7df881824d06fd38"
};
  
  //Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const db=getFirestore(app) ;

// Initialize Cloud Storage and get a reference to the service
firebase.initializeApp(firebaseConfig);
export const storage =firebase.storage();


