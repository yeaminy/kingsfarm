
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-5dNIsOEda2sLaJnCWgGnnEdxuhMQScU",
  authDomain: "kingsfarm-5f735.firebaseapp.com",
  projectId: "kingsfarm-5f735",
  storageBucket: "kingsfarm-5f735.appspot.com",
  messagingSenderId: "644289792426",
  appId: "1:644289792426:web:d0390425d2d661717843d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export {auth, db, provider }
