// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATaI2Xpa10N9jxqpkX2NnFq_KueRpev9s",
  authDomain: "proyectoreact-3237d.firebaseapp.com",
  projectId: "proyectoreact-3237d",
  storageBucket: "proyectoreact-3237d.firebasestorage.app",
  messagingSenderId: "270449339712",
  appId: "1:270449339712:web:8dbefe17faed28c3e69ea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)