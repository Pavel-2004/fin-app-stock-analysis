import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, query, collection, getDocs, addDoc, where } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCBqYPVzPN8dPYyuxZj2xODt2sAsCo2T6M",
    authDomain: "finance-database-d90c8.firebaseapp.com",
    projectId: "finance-database-d90c8",
    storageBucket: "finance-database-d90c8.appspot.com",
    messagingSenderId: "137254301415",
    appId: "1:137254301415:web:008d11b8671a3dfe55bc42",
    measurementId: "G-9P7SSVXJL1"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const getStocks = (userId) => {
    const q = query(collection(db, "stockOwned"), where("ownerId", "==", userId))
    return getDocs(q);
}
//this is how this function should be called 
/* 
getStocks()
.then(results => {
    console.log("here")
    results.forEach(result => {
        console.log(result.data())
    })
})
.catch(err => {
    console.log('here')
    console.log(err)
})
*/

export const createStock = (data) => {
    console.log(data)
    return addDoc(collection(db, "stockOwned"), data)
}


//this is how it should be ran
/*
createStock("test", "TSLA", "Tesla", 1000)
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})
*/

export const updateStock = (id, data) => {
    return setDoc(doc(db, "stockOwned", id), data);
}