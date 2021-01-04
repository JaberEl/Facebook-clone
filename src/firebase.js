import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1oiBYx047NbHk1M3i9MpZ8oOuwf7XqNg',
  authDomain: 'facebook-clone-7f6f9.firebaseapp.com',
  projectId: 'facebook-clone-7f6f9',
  storageBucket: 'facebook-clone-7f6f9.appspot.com',
  messagingSenderId: '288115238747',
  appId: '1:288115238747:web:5d62a03cc7b8566bb05c7e',
  measurementId: 'G-RZ9F5Z8QTB',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentification = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { authentification, provider };
export default database;
