import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB1rAj6sCuFt5skay1jTD8O1O8cnQxds8c',
  authDomain: 'task-manager-9eda3.firebaseapp.com',
  projectId: 'task-manager-9eda3',
  storageBucket: 'task-manager-9eda3.appspot.com',
  messagingSenderId: '372230901631',
  appId: '1:372230901631:web:47157d21be9349f5c9144a',
  measurementId: 'G-Q5S28M4NDY',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
