import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyCS-_m_AilyHe41M57GJ-5q4ID2uTYA21s",
  authDomain: "darxx830-7b39c.firebaseapp.com",
  projectId: "darxx830-7b39c",
  storageBucket: "darxx830-7b39c.firebasestorage.app",
  messagingSenderId: "690687159459",
  appId: "1:690687159459:web:c1ed866544e929b33ae316",
  measurementId: "G-2W9M454Z47"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); 
export { db, auth, analytics, collection, addDoc };