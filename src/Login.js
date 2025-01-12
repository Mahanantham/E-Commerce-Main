import { useState } from "react"

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


 


function Login() {

    const [email, setEmail] = useState()
    const [pswd, setPswd] = useState()

    const changeEmail = (a) => {
        setEmail(a.target.value)

    }
    const changePswd = (b) => {
        setPswd(b.target.value)
    }

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


    const LoginData = (e) => {
        e.preventDefault()

        let obj = {
            email: email,
            password: pswd
        }

        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then(() => {
                alert("Login successfully")
                navigate("/home")
            })
            .catch(() => {
                alert("error")

            })
    }

    const navigate = useNavigate()

    return (
        <div>
            <div className="container">
                <div className="card" style={{ width: "400px", alignItems: "center" }}>
                    <div className="card-title">
                        <h1>Login FORM</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={LoginData}>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="email" value={email} onChange={changeEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">password</label>
                                <input type="password" value={pswd} onChange={changePswd} class="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login;