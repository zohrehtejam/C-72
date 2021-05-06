import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDWWWH2d2gOsZFPgQxypm78cK26eBPvnis",
  authDomain: "story-3a4ab.firebaseapp.com",
  projectId: "story-3a4ab",
  storageBucket: "story-3a4ab.appspot.com",
  messagingSenderId: "489097260678",
  appId: "1:489097260678:web:5fb3dd93cbd76d4c0aeb07",
  measurementId: "G-LWJX5VZL0G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   