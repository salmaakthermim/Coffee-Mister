// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRKfVsvW9SdDdiP_zd1BYaVeU2l6eX7gE",
  authDomain: "coffe-store-cc08c.firebaseapp.com",
  projectId: "coffe-store-cc08c",
  storageBucket: "coffe-store-cc08c.firebasestorage.app",
  messagingSenderId: "1065885538210",
  appId: "1:1065885538210:web:5f93264cf2829faef404fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);