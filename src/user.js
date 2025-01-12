
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged,} from "firebase/auth";
import { useEffect, useState } from "react";



// Import the functions you need from the SDKs you need

const firebaseConfig = {
    apiKey: "AIzaSyBZjxbioO1mNnn-AZ28TP8WI2m5DfkBEFc",
    authDomain: "mahanantham-7ee35.firebaseapp.com",
    projectId: "mahanantham-7ee35",
    storageBucket: "mahanantham-7ee35.firebasestorage.app",
    messagingSenderId: "247570975854",
    appId: "1:247570975854:web:6ffe49fa9aab538b4a2a7f",
    measurementId: "G-L002KE8PFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

function UserName (){ 
    const[user,setUser]=useState()

    useEffect(()=>{
        let x=onAuthStateChanged(auth,u=>(setUser(u)))
        return x;
    })
    return user;
}

export default UserName;