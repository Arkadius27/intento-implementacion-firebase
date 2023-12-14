import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Dhlq2r87Y7phn9avTTr7aQDAPk8cW6Q",
  authDomain: "barros-ecommerce.firebaseapp.com",
  projectId: "barros-ecommerce",
  storageBucket: "barros-ecommerce.appspot.com",
  messagingSenderId: "159872009044",
  appId: "1:159872009044:web:9a9b9324bf06d7acd53ec1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };