import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkZaUTprSkkooOZ1Jj8dcCd6qC4gRvZiA",
  authDomain: "clone-f905c.firebaseapp.com",
  databaseURL: "https://clone-f905c.firebaseio.com",
  projectId: "clone-f905c",
  storageBucket: "clone-f905c.appspot.com",
  messagingSenderId: "947030458324",
  appId: "1:947030458324:web:d49df94de0715c9ae4a041",
  measurementId: "G-9BH9D8NETS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
