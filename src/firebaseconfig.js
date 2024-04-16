import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage ,ref} from "firebase/storage";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCvZXWRnK6IKNGEdfMQhFZV7MGzEyJisBk",
  authDomain: "biblio-9f368.firebaseapp.com",
  projectId: "biblio-9f368",
  storageBucket: "biblio-9f368.appspot.com",
  messagingSenderId: "342373409339",
  appId: "1:342373409339:web:cde9a465374741a0e5f21e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
