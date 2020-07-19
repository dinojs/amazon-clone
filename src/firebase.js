import firebase from "firebase";
const ENV = process.env; // eslint-disable-line

const firebaseApp = firebase.initializeApp({
  apiKey: ENV.REACT_APP_FIREBASE_APIKEY,
  authDomain: ENV.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: ENV.REACT_APP_FIREBASE_DATABASEURL,
  projectId: ENV.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: ENV.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: ENV.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: ENV.REACT_APP_FIREBASE_APPID,
  measurementId: ENV.REACT_APP_FIREBASE_MEASUREMENTID,
});

const auth = firebaseApp.auth();

export { auth };
