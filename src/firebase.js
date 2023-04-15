// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC01fhVcdNvwBBy14qJWA_REIrB8GTLPrM",
    authDomain: "filmfrenzy-1bb36.firebaseapp.com",
    projectId: "filmfrenzy-1bb36",
    storageBucket: "filmfrenzy-1bb36.appspot.com",
    messagingSenderId: "840631514502",
    appId: "1:840631514502:web:07e266fa5786bee31da807",
    measurementId: "G-071HLT3CFC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 

  export { auth, db };

