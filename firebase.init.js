import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5vC9F1Qox8qLD8Q_97sLjzIUphSCaUss",
  authDomain: "enigma-express-news.firebaseapp.com",
  projectId: "enigma-express-news",
  storageBucket: "enigma-express-news.appspot.com",
  messagingSenderId: "846743595493",
  appId: "1:846743595493:web:8c4e51100166a2b8ff670c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;