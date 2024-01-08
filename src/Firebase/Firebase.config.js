// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMuI0kBKoHdeNp5ODFc-40zwcVOIhHhm4",
  authDomain: "collage-website-2d767.firebaseapp.com",
  projectId: "collage-website-2d767",
  storageBucket: "collage-website-2d767.appspot.com",
  messagingSenderId: "455044592752",
  appId: "1:455044592752:web:8f01ac8b5078ce8d2bb0b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth  = getAuth(app)