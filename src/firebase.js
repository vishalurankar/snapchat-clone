import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuwB_i5a8Y3fDS3p6nROZ5BNOMlFHJbZs",
  authDomain: "snapchat-clone-e7cf7.firebaseapp.com",
  projectId: "snapchat-clone-e7cf7",
  storageBucket: "snapchat-clone-e7cf7.appspot.com",
  messagingSenderId: "123564364756",
  appId: "1:123564364756:web:ee715ba64e09291a883c41",
  measurementId: "G-JWF8TN3WJD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
