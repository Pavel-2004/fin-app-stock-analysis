import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCBqYPVzPN8dPYyuxZj2xODt2sAsCo2T6M",
  authDomain: "finance-database-d90c8.firebaseapp.com",
  projectId: "finance-database-d90c8",
  storageBucket: "finance-database-d90c8.appspot.com",
  messagingSenderId: "137254301415",
  appId: "1:137254301415:web:008d11b8671a3dfe55bc42",
  measurementId: "G-9P7SSVXJL1"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const createUserHandler = (auth, username, password) => {
  createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log("user created:", user, password)
      return {success: true, result: user}
    })
    .catch((err) => {
      const errorMessage = err.message;
      return {success: false, result: errorMessage}
    })
}

export const signInHandle = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      return {success: true, result: user}
    })
    .catch(err => {return {success: false, result: err.message}})
}
