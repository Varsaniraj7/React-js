// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDApBBZtrT5uzWwcnfDDGUivMwd-gUbX2o",
  authDomain: "project-firebase-5a43f.firebaseapp.com",
  projectId: "project-firebase-5a43f",
  storageBucket: "project-firebase-5a43f.firebasestorage.app",
  messagingSenderId: "687021715451",
  appId: "1:687021715451:web:a23cad92493c9381e4e55e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};