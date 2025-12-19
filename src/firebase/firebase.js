import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8urX8kfy1Dru4aneKeCdj89-HaoI-a7g",
  authDomain: "react-ecommerce-cart.firebaseapp.com",
  projectId: "react-ecommerce-cart",
  storageBucket: "react-ecommerce-cart.firebasestorage.app",
  messagingSenderId: "138713981674",
  appId: "1:138713981674:web:d7e3ad83541dbdf9b16d93",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
