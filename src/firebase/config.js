import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBaGREPQvuDPdCTuhx_lwoA-2nOlPD8Gn0",
  authDomain: "random-projects-79e61.firebaseapp.com",
  databaseURL: "https://random-projects-79e61.firebaseio.com",
  projectId: "random-projects-79e61",
  storageBucket: "random-projects-79e61.appspot.com",
  messagingSenderId: "1066347237127",
  appId: "1:1066347237127:web:425ef57c14e40b9128ffa2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseFirestore = firebase.firestore();
export const firebaseStorage = firebase.storage();
