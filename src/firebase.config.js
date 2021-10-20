import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBsql8VcI0eHFtWw7nYui2oJsm8OrSpIbk',
  authDomain: 'where-s-waldo-1619c.firebaseapp.com',
  projectId: 'where-s-waldo-1619c',
  storageBucket: 'where-s-waldo-1619c.appspot.com',
  messagingSenderId: '1055679976238',
  appId: '1:1055679976238:web:606b85f7d4c68b934a60bf',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
