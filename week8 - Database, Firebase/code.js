// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbKX4hlXQGPGuAYjxxVJEVJh0At78-S3U",
  authDomain: "todo-9436f.firebaseapp.com",
  projectId: "todo-9436f",
  storageBucket: "todo-9436f.appspot.com",
  messagingSenderId: "1070340436811",
  appId: "1:1070340436811:web:6f57702d75476da15ceece",
  measurementId: "G-Y17280ERLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);