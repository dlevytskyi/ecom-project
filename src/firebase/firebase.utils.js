import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCqhu_xG0Jfyu93Xps0pzNnEmzzmTn9h1s',
  authDomain: 'crwn-db-d3a90.firebaseapp.com',
  databaseURL: 'https://crwn-db-d3a90.firebaseio.com',
  projectId: 'crwn-db-d3a90',
  storageBucket: 'crwn-db-d3a90.appspot.com',
  messagingSenderId: '1010888606934',
  appId: '1:1010888606934:web:2ae7689b778988c0eb7577',
  measurementId: 'G-QBJPKSD2NF',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
