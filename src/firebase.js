import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBHbghbapVv9SiBYmcrIqoedu2MWAzJ0a8",
  authDomain: "chat-3b4e1.firebaseapp.com",
  projectId: "chat-3b4e1",
  storageBucket: "chat-3b4e1.appspot.com",
  messagingSenderId: "573134457400",
  appId: "1:573134457400:web:c8745c78fab366088634cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()