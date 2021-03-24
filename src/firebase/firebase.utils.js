import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBBwpRaHzHnC7vAr2934wdYQzmREAaZtlk",
    authDomain: "crwn-db-09.firebaseapp.com",
    projectId: "crwn-db-09",
    storageBucket: "crwn-db-09.appspot.com",
    messagingSenderId: "165448292084",
    appId: "1:165448292084:web:82efc99be2fdfbe3f070a1",
    measurementId: "G-XVLHMGBJC3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

