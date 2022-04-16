
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDjZBKOVYAcZHfgBJYFyP23ST_P3ZzL3Ig",
    authDomain: "clone-973fa.firebaseapp.com",
    projectId: "clone-973fa",
    storageBucket: "clone-973fa.appspot.com",
    messagingSenderId: "429396440162",
    appId: "1:429396440162:web:c1fcdcf605bd0848214d3b"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);


 export const auth = firebase.auth();

