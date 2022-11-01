// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjKZVS3DGFk0RQP0N-s43DuLj90VUOIIE",
  authDomain: "scrportfolio.firebaseapp.com",
  projectId: "scrportfolio",
  storageBucket: "scrportfolio.appspot.com",
  messagingSenderId: "538559347737",
  appId: "1:538559347737:web:1178066b381c516d51be88",
  measurementId: "G-99N4YLF8V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);