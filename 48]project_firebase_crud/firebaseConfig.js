// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyDM6gV_2kVTxVAxQ6KlTevSpvCOF-KvpMc",
  authDomain: "project-crud-e2277.firebaseapp.com",
  projectId: "project-crud-e2277",
  storageBucket: "project-crud-e2277.firebasestorage.app",
  messagingSenderId: "1347281790",
  appId: "1:1347281790:web:c36f379228c120f889892f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };