import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnpaSMLeHwzAHZiszbWdtjJk9A8MJf8qA",
  authDomain: "minnezota-properties-90d6f.firebaseapp.com",
  projectId: "minnezota-properties-90d6f",
  storageBucket: "minnezota-properties-90d6f.firebasestorage.app",
  messagingSenderId: "267460483726",
  appId: "1:267460483726:web:23e6a91cfdc13cd871c7df"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); 
export { db, auth, analytics, collection, addDoc };