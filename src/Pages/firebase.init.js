// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2j0QmMewiDipIhcKxyDj0eesSgdULdlw",
    authDomain: "smart-gadget-warehouse.firebaseapp.com",
    projectId: "smart-gadget-warehouse",
    storageBucket: "smart-gadget-warehouse.appspot.com",
    messagingSenderId: "238675412779",
    appId: "1:238675412779:web:4c479dbf42a2142c6c676e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;