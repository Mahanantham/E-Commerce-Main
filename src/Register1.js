import { useState } from "react";
import { initializeApp, getApps } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register1() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [cpswd, setCpswd] = useState("");

  const navigate = useNavigate();

  const changeId = (a) => setId(a.target.value);
  const changeEmail = (b) => setEmail(b.target.value);
  const changePswd = (c) => setPswd(c.target.value);
  const changeCpswd = (d) => setCpswd(d.target.value);

  const firebaseConfig = {
    apiKey: "AIzaSyDSRo87RuMybmTXng8PfX3wUaJHUXcGcBo",
    authDomain: "project-k-bf34e.firebaseapp.com",
    projectId: "project-k-bf34e",
    storageBucket: "project-k-bf34e.appspot.com",
    messagingSenderId: "67226497842",
    appId: "1:67226497842:web:c18ab888a2958b13909d2b",
    measurementId: "G-XSWPNHEBPC",
  };

  // Initialize Firebase only if not already initialized
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
  const Auth = getAuth(app);

  const RegisterData = (e) => {
    e.preventDefault();
    if (pswd !== cpswd) {
      alert("Passwords do not match");
      return;
    }
    const obj = {
      email: email,
      password: pswd,
    };
    createUserWithEmailAndPassword(Auth, obj.email, obj.password)
      .then(() => {
        alert("The data has been registered successfully");
        navigate("/Login");
      })
      .catch(() => {
        alert("error  occured")
      });
  };

  return (
    <div>
      <div className="container">
        <div className="card" style={{ width: "400px", alignItems: "center" }}>
          <div className="card-title">
            <h1>REGISTRATION FORM</h1>
          </div>
          <div className="card-body">
            <form onSubmit={RegisterData}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" value={id} onChange={changeId} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" value={email} onChange={changeEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={pswd} onChange={changePswd} className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" value={cpswd} onChange={changeCpswd} className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register1;
