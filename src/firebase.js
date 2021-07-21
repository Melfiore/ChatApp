import firebase from "firebase/app";
import "firebase/auth";

//Firebase Configuration object that contains keys and identifiers 

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDZfpL00EpAkNtOoIZ0b-bqX6KvIKgun0E",
    authDomain: "unichat-26c13.firebaseapp.com",
    projectId: "unichat-26c13",
    storageBucket: "unichat-26c13.appspot.com",
    messagingSenderId: "78657476686",
    appId: "1:78657476686:web:a98c480ed456eca7400b1f"
}).auth();