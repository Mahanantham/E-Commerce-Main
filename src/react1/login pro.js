import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPswd, setLoginPswd] = useState("");
    const navigate = useNavigate();

    const storedEmail = localStorage.getItem("EMAIL");
    const storedPswd = localStorage.getItem("PSWD");

    const changeLoginEmail = (e) => setLoginEmail(e.target.value);
    const changeLoginPswd = (e) => setLoginPswd(e.target.value);

    const submitLogin = (e) => {
        e.preventDefault();

        if (loginEmail === storedEmail && loginPswd === storedPswd) {
            alert("Login Successful!");
            navigate('/home1'); // Redirect to Home page after successful login
        } else {
            alert("Invalid Email or Password");
        }
    };

    return (
        <div className="container" style={{ width: "400px", marginTop: "20px" }}>
            <div className="card">
                <div className="card-title text-center">
                    <h1>Login Form</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={submitLogin}>
                        <div className="mb-3">
                            <label htmlFor="loginEmail" className="form-label">Email address</label>
                            <input
                                type="email"
                                value={loginEmail}
                                onChange={changeLoginEmail}
                                className="form-control"
                                id="loginEmail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="loginPassword" className="form-label">Password</label>
                            <input
                                type="password"
                                value={loginPswd}
                                onChange={changeLoginPswd}
                                className="form-control"
                                id="loginPassword" />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <div style={{ marginTop: "10px" }}>
                                Don't have an account?{" "}
                                <a href="/">Register here</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
