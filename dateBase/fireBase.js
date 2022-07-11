import firebase from 'firebase'

import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8jEVt4NfXZtWhxsyF6Am7TwqQ8BggAKY",
    authDomain: "react-native-crud-7272a.firebaseapp.com",
    projectId: "react-native-crud-7272a",
    storageBucket: "react-native-crud-7272a.appspot.com",
    messagingSenderId: "604601479409",
    appId: "1:604601479409:web:8ba9e9aed0c883ba727950"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
    firebase,
    db
  }