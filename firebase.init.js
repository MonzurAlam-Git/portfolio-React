// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu7VlM7Fuk9Vq3unC_Je7ZlfhJ0UfBNzA",
    authDomain: "manzur-portfolio.firebaseapp.com",
    projectId: "manzur-portfolio",
    storageBucket: "manzur-portfolio.appspot.com",
    messagingSenderId: "601880457478",
    appId: "1:601880457478:web:2a704b8d0789cb3809ae87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;