// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHEytdRc5aR6j9tDsd2LQEnIul6UbWGXg",
  authDomain: "real-time-data-55c43.firebaseapp.com",
  projectId: "real-time-data-55c43",
  storageBucket: "real-time-data-55c43.appspot.com",
  messagingSenderId: "468099788972",
  appId: "1:468099788972:web:688c3c639ef0491fd5ef09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
