// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIcNFOiLMZ246sohBIawuXsmyI1u2H89k",
  authDomain: "financeproject-f25e2.firebaseapp.com",
  projectId: "financeproject-f25e2",
  storageBucket: "financeproject-f25e2.appspot.com",
  messagingSenderId: "239722344113",
  appId: "1:239722344113:web:52e248c826c7e910f73c90",
  measurementId: "G-8ZG9DJN70P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);
export default app;