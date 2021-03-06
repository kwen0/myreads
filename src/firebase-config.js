import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyAJ8XzB2vJgeMWLiga5g_tPl8cK4x_uqVI",
  authDomain: "myreads-a5b74.firebaseapp.com",
  projectId: "myreads-a5b74",
  storageBucket: "myreads-a5b74.appspot.com",
  messagingSenderId: "266026697922",
  appId: "1:266026697922:web:e2f958afd8faae7fbc275b"
});

const auth = getAuth();
const db = getFirestore();
export { app, db, auth };