// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkRsqhE5DJgElPAsVM5VK0TwdLY3aZ8O0",
    authDomain: "fir-intro-59bc2.firebaseapp.com",
    projectId: "fir-intro-59bc2",
    storageBucket: "fir-intro-59bc2.firebasestorage.app",
    messagingSenderId: "903299319252",
    appId: "1:903299319252:web:aeabf76af409f7b4ec8241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };