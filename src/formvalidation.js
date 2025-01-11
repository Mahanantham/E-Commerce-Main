import { useState } from "react";

function FormValidation() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [pswd, setPswd] = useState()
    const [cpswd, setCpswd] = useState()

    const changeName = (a) => {
        console.log(a.target.value)
        setName(a.target.value)
    }
    const changeEmail = (b) => {
        console.log(b.target.value)
        setEmail(b.target.value)
    }
    const changepswd = (c) => {
        console.log(c.target.value)
        setPswd(c.target.value)
    }
    const changecpswd = (d) => {
        console.log(d.target.value)
        setCpswd(d.target.value)
    }
    const submitData = () => {

        if (name.length <= 5) {
            alert("name should be greater than 5 letters")
        }
        else if (pswd !== cpswd) {
            alert("pswd and cpswd doesn't match")
        }
        else {
            alert("registration success")
            localStorage.setItem("NAME", name)
            localStorage.setItem("EMAIL", email)
            localStorage.setItem("PSWD", pswd)
            localStorage.setItem("CPSWD", cpswd)
        }
    }







    return (
        <div>
            <div className="container" style={{ width: "400px" }}>
                <div className="card">
                    <div className="card-title text-center">
                        <h1>Form validation</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitData}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" value={name} onChange={changeName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" value={email} onChange={changeEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" value={pswd} onChange={changepswd} class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                <input type="password" value={cpswd} onChange={changecpswd} class="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Login />
        </div>
    )
}
export default FormValidation;

function Login() {
    const [email, setSemail] = useState()
    const [pswd, setSpassword] = useState()

    const Semail = localStorage.getItem("EMAIL");
    const Spassword = localStorage.getItem("PSWD");

    const changeEmail = (x) => {
        console.log(x.target.value)
        setSemail(x.target.value)
    }
    const changePassword = (y) => {
        console.log(y.target.value)
        setSpassword(y.target.value)
    }
    const submitLogin = () => {

        if (email === Semail && pswd === Spassword) {
            alert("Login Successful")
        } else {
            alert("Invalid Email or Password")
        }
    }



    return (
        <div className="container" style={{ width: "400px" }}>
            <div className="card">
                <div className="card-title text-center" >
                    <h1>login form</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={submitLogin}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" onChange={changeEmail} class="form-control" id="email1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" onChange={changePassword} class="form-control" id="pass1" />
                        </div>
                        <button type="submit" class="btn btn-primary">login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
