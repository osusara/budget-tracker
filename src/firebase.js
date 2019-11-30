import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: <API_KEY>,
  authDomain: <AUTH_DOMAIN>,
  databaseURL: <DATABASE_URL>,
  projectId: <PROJECT_ID>,
  storageBucket: "",
  messagingSenderId: <MESSAGING_SENDER_ID>,
  appId: <API_ID>
});

//const db = firebaseApp.firestore();

export default firebaseApp;
