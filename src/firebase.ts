// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo3zx4PbkDXdAVNjH5daoLbLl79toEIS4",
  authDomain: "auth-ab9ea.firebaseapp.com",
  projectId: "auth-ab9ea",
  storageBucket: "auth-ab9ea.appspot.com",
  messagingSenderId: "474291459831",
  appId: "1:474291459831:web:25dfb0a3db91c1c6eea5f2",
  databaseURL: "https://auth-ab9ea-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
