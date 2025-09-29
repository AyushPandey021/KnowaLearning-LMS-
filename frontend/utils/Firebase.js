import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "web-app-313ec.firebaseapp.com",
  projectId: "web-app-313ec",
  storageBucket: "web-app-313ec.firebasestorage.app",
  messagingSenderId: "358250341653",
  appId: "1:665916718747:web:1:358250341653:web:638aee493a37ef9f80b51c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}