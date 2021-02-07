import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDkyVvTv9Z_wW9Y26mQ_pf1XeIQ_sGuMMw",
    authDomain: "crwn-db-813fd.firebaseapp.com",
    projectId: "crwn-db-813fd",
    storageBucket: "crwn-db-813fd.appspot.com",
    messagingSenderId: "316835296710",
    appId: "1:316835296710:web:b7609877ff54a087b76ec7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
