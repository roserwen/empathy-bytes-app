// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKk4lvLKsVDMjAanT26-4h2BKo7APZpWU",
  authDomain: "empathy-bytes-app.firebaseapp.com",
  projectId: "empathy-bytes-app",
  storageBucket: "empathy-bytes-app.appspot.com",
  messagingSenderId: "288820002694",
  appId: "1:288820002694:web:29ac2bd491306ec55a3607"
};

// Initialize Firebase
export const fb_app = initializeApp(firebaseConfig);
export const fb_storage = getStorage(fb_app);
