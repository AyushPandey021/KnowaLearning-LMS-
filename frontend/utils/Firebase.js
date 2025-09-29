
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCsD3V0SF8tFz-K9Esr0Cds_13VqG4g6lA",
  authDomain: "web-app-313ec.firebaseapp.com",
  projectId: "web-app-313ec",
  storageBucket: "web-app-313ec.firebasestorage.app",
  messagingSenderId: "358250341653",
  appId: "1:358250341653:web:638aee493a37ef9f80b51c",
  measurementId: "G-KFR7KB3QZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
export {auth,provider}