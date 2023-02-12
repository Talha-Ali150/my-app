// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0chHHnzLO3eQWfe-jjzVXCvI0Bqs3rD0",
  authDomain: "final-hackathon-123.firebaseapp.com",
  projectId: "final-hackathon-123",
  storageBucket: "final-hackathon-123.appspot.com",
  messagingSenderId: "768324602818",
  appId: "1:768324602818:web:e44a67f74db1f7cdd5245b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const signInFirebase=(email,password)=>{
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('login successful')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('login un')
  });}

  export {signInFirebase}