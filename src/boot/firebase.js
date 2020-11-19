 // Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBclmYy9Ol4_uWfB9dDIES8BQ_O7AhtsgU",
    authDomain: "smackchat-ede0b.firebaseapp.com",
    databaseURL: "https://smackchat-ede0b.firebaseio.com",
    projectId: "smackchat-ede0b",
    storageBucket: "smackchat-ede0b.appspot.com",
    messagingSenderId: "541791844268",
    appId: "1:541791844268:web:33f05a962cd00c60e62c09"
  };
  // Initialize Firebase
  let firebaseApp=firebase.initializeApp(firebaseConfig);
  let firebaseAuth=firebaseApp.auth();
  let firebaseDb= firebaseApp.database();

  export { firebaseAuth, firebaseDb}
