// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2koRmqq4JJFij4aLdhozcwP12K8A4Fus",
  authDomain: "todos-7a81c.firebaseapp.com",
  projectId: "todos-7a81c",
  storageBucket: "todos-7a81c.appspot.com",
  messagingSenderId: "835686292588",
  appId: "1:835686292588:web:29cdb4b634e442a0ed0c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)