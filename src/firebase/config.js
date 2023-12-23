// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiNen2D0CWe973G0TFDE90_p2nt7OOdjc",
  authDomain: "proyectshop-33a88.firebaseapp.com",
  projectId: "proyectshop-33a88",
  storageBucket: "proyectshop-33a88.appspot.com",
  messagingSenderId: "234169845666",
  appId: "1:234169845666:web:86e6e11a194ab3279194fb",
  measurementId: "G-S514FZSGCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)