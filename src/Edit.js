import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';



function Edit() {


    const [img, setImg] = useState("");
    const [productname, setProductname] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const {empid} = useParams()
    const navigate = useNavigate()

    const changeName = (a) => {
        console.log(a.target.value)
        setImg(a.target.value)
    }
    const changeEmail = (b) => {
        console.log(b.target.value)
        setProductname(b.target.value)
    }
    const changepswd = (c) => {
        console.log(c.target.value)
        setPrice(c.target.value)
    }
    const changecpswd = (d) => {
        console.log(d.target.value)
        setRating(d.target.value)
    }

    const addData = (event) => {
            event.preventDefault();
        const obj = { img, productname, price, rating }
        fetch("http://localhost:3006/E.Commerce/"+empid,{
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(obj)
        }).then(() => {
            alert("api data updated successfully")
            navigate("/")
        }).catch(() => {
            alert("error")
        })
    }



    return (
        <div>
            <div className="container" style={{ width: "400px" }}>
                <div className="card">
                    <div className="card-title text-center">
                        <h1>Adding data into API</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={addData}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Img</label>
                                <input type="url" value={img} onChange={changeName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">product name</label>
                                <input type="text" value={productname} onChange={changeEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">price</label>
                                <input type="number" value={price} onChange={changepswd} class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">rating</label>
                                <input type="number" value={rating} onChange={changecpswd} class="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <Link to={"/"} className="btn btn-info">Back</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Edit;