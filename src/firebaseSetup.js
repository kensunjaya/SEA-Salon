import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlW8QN9AIVpgwuOympZFA5bmKZReffBCA",
  authDomain: "sea-salon-f3bee.firebaseapp.com",
  projectId: "sea-salon-f3bee",
  storageBucket: "sea-salon-f3bee.appspot.com",
  messagingSenderId: "112677358874",
  appId: "1:112677358874:web:2adc6ace27b4046110b0a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);

const db = getFirestore(app);



export { app, auth, db, collection, addDoc };