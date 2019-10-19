import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD14W3gHhN5-x9KItQu5_PhUksXLQrUjhM",
  authDomain: "ossa-budget-cal.firebaseapp.com",
  databaseURL: "https://ossa-budget-cal.firebaseio.com",
  projectId: "ossa-budget-cal",
  storageBucket: "",
  messagingSenderId: "723334135682",
  appId: "1:723334135682:web:4e16dea22e10e39b0a199b"
});

//const db = firebaseApp.firestore();

export default firebaseApp;
