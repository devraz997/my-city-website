// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD496KTsYYVJgZbTOBbGqpZzQUJ0MM0z2g",
    authDomain: "mbnrbolte.firebaseapp.com",
    projectId: "mbnrbolte",
    storageBucket: "mbnrbolte.appspot.com",
    messagingSenderId: "37967115234",
    appId: "1:37967115234:web:49680285dffe9611253fbb",
    measurementId: "G-3ZRYL5FTPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged, signOut };