// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVMhwyQ4T9n18LMhrvUpTNIBQo32C5ezg",
  authDomain: "evoca-79b88.firebaseapp.com",
  projectId: "evoca-79b88",
  storageBucket: "evoca-79b88.firebasestorage.app",
  messagingSenderId: "130371961904",
  appId: "1:130371961904:web:f1821bf87c067d8bc7d9f5",
  measurementId: "G-WS1VM7BC80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);