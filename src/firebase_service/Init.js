import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHDrAF4K0bm-BnPLPbch2bNNWN4rGsPis",
  authDomain: "librarian-ilkom.firebaseapp.com",
  projectId: "librarian-ilkom",
  storageBucket: "librarian-ilkom.appspot.com",
  messagingSenderId: "291087881744",
  appId: "1:291087881744:web:8530d0f71eb2bf93679c95",
};

const app = initializeApp(firebaseConfig);

export function getFirebaseApp() {
  return app;
}
