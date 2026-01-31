// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXqqiNETPsRjDieNE-ZevQ-Ct79Zyr3UY",
  authDomain: "blog-project-ca716.firebaseapp.com",
  projectId: "blog-project-ca716",
  storageBucket: "blog-project-ca716.firebasestorage.app",
  messagingSenderId: "928077171754",
  appId: "1:928077171754:web:179a17f4af319776974753",
  measurementId: "G-JTTH1QZKRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
