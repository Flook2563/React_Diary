import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAAjIkHhiDPEbcYm9WFOmgLNOKkdAdMft0",
  authDomain: "react-diary-1c20d.firebaseapp.com",
  databaseURL: "https://react-diary-1c20d-default-rtdb.firebaseio.com",
  projectId: "react-diary-1c20d",
  storageBucket: "react-diary-1c20d.appspot.com",
  messagingSenderId: "944030511672",
  appId: "1:944030511672:web:9bb26e9eebd8dee90feccd",
  measurementId: "G-HTH7TN8FP6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  export default firebase;