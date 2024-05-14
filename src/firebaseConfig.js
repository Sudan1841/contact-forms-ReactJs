

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAfLzg5Aeua0dA2TeWRAgslgyBXAeIzows",
  authDomain: "my-project-1562563201095.firebaseapp.com",
  databaseURL: "https://my-project-1562563201095.firebaseio.com",
  projectId: "my-project-1562563201095",
  storageBucket: "my-project-1562563201095.appspot.com",
  messagingSenderId: "212338060009",
  appId: "1:212338060009:web:09ba642ee65882b2e65e78",
  measurementId: "G-S6PR5971TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { app, analytics, db };

