import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCUE5GWc0MD8p2f62m-94PC3NkxO2sRkpk",
  authDomain: "blog-app-9f510.firebaseapp.com",
  databaseURL: "https://blog-app-9f510.firebaseio.com",
  projectId: "blog-app-9f510",
  storageBucket: "blog-app-9f510.appspot.com",
  messagingSenderId: "871684134680"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
