import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVMhwyQ4T9n18LMhrvUpTNIBQo32C5ezg",
  authDomain: "evoca-79b88.firebaseapp.com",
  projectId: "evoca-79b88",
  storageBucket: "evoca-79b88.firebasestorage.app",
  messagingSenderId: "130371961904",
  appId: "1:130371961904:web:f1821bf87c067d8bc7d9f5",
  measurementId: "G-WS1VM7BC80",
  // Ավելացված է Realtime Database-ի հղումը նկարից
  databaseURL: "https://evoca-79b88-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);