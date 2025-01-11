import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
    // States for form data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [pswd, setPswd] = useState("");
    const [cpswd, setCpswd] = useState("");

    const navigate = useNavigate(); // for navigation after registration

    // Handle changes in input fields
    const changeName = (e) => setName(e.target.value);
    const changeEmail = (e) => setEmail(e.target.value);
    const changeMobile = (e) => setMobile(e.target.value);
    const changePswd = (e) => setPswd(e.target.value);
    const changeCpswd = (e) => setCpswd(e.target.value);

    // Handle form submission
    const submitData = (e) => {
        e.preventDefault();

        // Validate form fields
        if (name.length <= 5) {
            alert("Name should be greater than 5 letters");
        } else if (!email.includes("@")) {
            alert("Please enter a valid email address.");
        } else if (mobile.length !== 10) {
            alert("Mobile number should be 10 digits long.");
        } else if (pswd.length < 6) {
            alert("Password should be at least 6 characters.");
        } else if (pswd !== cpswd) {
            alert("Password and Confirm Password don't match.");
        } else {
            // Store the user data in localStorage
            alert("Registration Successful!");
            localStorage.setItem("NAME", name);
            localStorage.setItem("EMAIL", email);
            localStorage.setItem("MOBILE", mobile);
            localStorage.setItem("PSWD", pswd);
            localStorage.setItem("userEmail", email); // Store email for login

            // Navigate to the login page after successful registration
            navigate("/login");
        }
    };

    return (
        <div className="container" style={{ width: "400px", marginTop: "20px" }}>
            <div className="card">
                <div className="card-title text-center">
                    <h1>Registration Form</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={submitData}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={changeName}
                                className="form-control"
                                id="name"
                                required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={changeEmail}
                                className="form-control"
                                id="email"
                                required/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile Number</label>
                            <input
                                type="text"
                                value={mobile}
                                onChange={changeMobile}
                                className="form-control"
                                id="mobile"
                                required/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                value={pswd}
                                onChange={changePswd}
                                className="form-control"
                                id="password"
                                required/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                value={cpswd}
                                onChange={changeCpswd}
                                className="form-control"
                                id="cpassword"
                                required/>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>

                        <div style={{ marginTop: "10px", textAlign: "center" }}>
                            Already have an account?{" "}
                            <a href="/login">Login here</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
