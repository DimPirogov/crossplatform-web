// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS8FUwBFRLbiDiZd3lYlMdKkr1qvNDVpA",
  authDomain: "my-project-6d5ac.firebaseapp.com",
  projectId: "my-project-6d5ac",
  storageBucket: "my-project-6d5ac.appspot.com",
  messagingSenderId: "156993958458",
  appId: "1:156993958458:web:dbbbb8d9ad4182f39cfb03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
