import { getFirebaseApp } from '../Init.js';
import * as firebaseAuth from 'firebase/auth';

// initialize firebase
const firebase = getFirebaseApp();

// initialize Firebase Authentication
const auth = firebaseAuth.getAuth(firebase);

export { auth, firebaseAuth };
