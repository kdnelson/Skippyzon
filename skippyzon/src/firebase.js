import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5UCQMRHESDEh0h5SO4p2QQBlDPkkvlo0",
  authDomain: "skippyzon-2ff49.firebaseapp.com",
  databaseURL: "https://skippyzon-2ff49-default-rtdb.firebaseio.com",
  projectId: "skippyzon-2ff49",
  storageBucket: "skippyzon-2ff49.appspot.com",
  messagingSenderId: "889009414021",
  appId: "1:889009414021:web:00fa0e7cac7734c06f6eec",
  measurementId: "G-2QPLZE9EEH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };