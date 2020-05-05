import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBC_uIfYiiXupemdWs0E0UVQM2QDgBoBDA",
  authDomain: "fashion-store-ae54b.firebaseapp.com",
  databaseURL: "https://fashion-store-ae54b.firebaseio.com",
  projectId: "fashion-store-ae54b",
  storageBucket: "fashion-store-ae54b.appspot.com",
  messagingSenderId: "966414297727",
  appId: "1:966414297727:web:2210da18126892a6d5ed4a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
