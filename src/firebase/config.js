import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/compat/auth';

// TODO: Replace config values with environment vars for generic login

const firebaseConfig = {
  apiKey: "AIzaSyDVXif0-b4X7S42yVHZaA7Yw76WV9_0kTM",
  authDomain: "dream-dog-client.firebaseapp.com",
  projectId: "dream-dog-client",
  storageBucket: "dream-dog-client.appspot.com",
  messagingSenderId: "871920155123",
  appId: "1:871920155123:web:630379ab8728e50e877a86",
  measurementId: "G-H7W9QX7NPR"
  };

// TODO: Add scopes (get contacts, etc for sharing the app)
/*
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const provider = new GoogleAuthProvider();
*/


if (!firebase.apps.length){
    const app = firebase.initializeApp(firebaseConfig);
}

export {firebase};