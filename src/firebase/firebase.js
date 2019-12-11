import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const prodConfig = {
  apiKey: "AIzaSyD9myJlHRJfcFdoQnHt7DBxEz6Ez_nl9j8",
  authDomain: "newsraven-kashif.firebaseapp.com",
  databaseURL: "https://newsraven-kashif.firebaseio.com",
  projectId: "newsraven-kashif",
  storageBucket: "newsraven-kashif.appspot.com",
  messagingSenderId: "915328458077",
  appId: "1:915328458077:web:220b6fa3c7559fb4"
};

const devConfig = {
  apiKey: "AIzaSyD9myJlHRJfcFdoQnHt7DBxEz6Ez_nl9j8",
  authDomain: "newsraven-kashif.firebaseapp.com",
  databaseURL: "https://newsraven-kashif.firebaseio.com",
  projectId: "newsraven-kashif",
  storageBucket: "newsraven-kashif.appspot.com",
  messagingSenderId: "915328458077",
  appId: "1:915328458077:web:220b6fa3c7559fb4"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const firestoreDB = firebase.firestore();
const storageRef = firebase.storage().ref();

export { db, firestoreDB, auth, storageRef };
// export { db, firestoreDB, auth};
