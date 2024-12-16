import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACr6gEeBfOPO62CcG3-fL98sS5pkgRzWk",
    authDomain: "foota-323c2.firebaseapp.com",
    projectId: "foota-323c2",
    storageBucket: "foota-323c2.firebasestorage.app",
    messagingSenderId: "194312818097",
    appId: "1:194312818097:web:e66b07d57be74738fc0190",
    measurementId: "G-0B99CN1WTV"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
