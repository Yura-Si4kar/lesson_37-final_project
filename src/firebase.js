import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3ETiGe0-Xkpy4E-i5uEYkl4U5PNJ3qBc",
  authDomain: "restaurant-3b2a2.firebaseapp.com",
  projectId: "restaurant-3b2a2",
  storageBucket: "restaurant-3b2a2.appspot.com",
  messagingSenderId: "933401370611",
  appId: "1:933401370611:web:3c64d7bf0e4051cad9bc86"
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();