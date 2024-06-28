import React from "react";
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmWtaqOlgeotP5Whj5-pheZT9sahTgQ9M",
    authDomain: "messageme-58e97.firebaseapp.com",
    projectId: "messageme-58e97",
    storageBucket: "messageme-58e97.appspot.com",
    messagingSenderId: "1080362208667",
    appId: "1:1080362208667:web:bfbbda318026be4211e53e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase;