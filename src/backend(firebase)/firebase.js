// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6kctcq_Niq5fe2uKYkRFTbJfreGRgprc",
  authDomain: "pokemon-game-a335b.firebaseapp.com",
  projectId: "pokemon-game-a335b",
  storageBucket: "pokemon-game-a335b.firebasestorage.app",
  messagingSenderId: "598728878562",
  appId: "1:598728878562:web:c823beb197d14a2d46b1bb",
  measurementId: "G-8VB1H2LVL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)