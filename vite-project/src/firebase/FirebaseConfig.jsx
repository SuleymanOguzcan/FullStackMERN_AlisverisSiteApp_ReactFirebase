// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Ii4hfH34rvrOVb3gf04qIz2tMjBp2LY",
  authDomain: "myfirstapp-c1938.firebaseapp.com",
  projectId: "myfirstapp-c1938",
  storageBucket: "myfirstapp-c1938.appspot.com",
  messagingSenderId: "1086978401331",
  appId: "1:1086978401331:web:1fb1a95bd140cabd0a6f46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export { fireDB,auth } ;