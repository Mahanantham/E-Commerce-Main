import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import UserName from "./user.js";
import Pagination1 from "./pagination1.js";

function Home1() {
    const [data, setData] = useState([]);

    //pagination

    const [page, setPage] = useState(1); // Current page
    const [records, setRecords] = useState(3); // Records per page

    const [filter, setFilter] = useState(""); // Filter value
    const [sort, setSort] = useState(""); // Sort value

    const navigate = useNavigate();

    // Fetch data on component load

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("http://localhost:3006/E.Commerce", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((resp) => {
                setData(resp);
            })
            .catch(() => {
                alert("Error fetching data");
            });
    };

    //Add To Cart

    const addToCart = (id) => {
        fetch(`http://localhost:3006/E.Commerce/${id}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((resp) => {
                fetch("http://localhost:3006/Addtocart", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(resp),
                })
                    .then(() => alert("Data added to cart successfully"))
                    .catch(() => alert("Error adding to cart"));
            });
    };

    const editForm = (id) => {
        navigate(`/edit/${id}`);
    };

    // Delete Form

    const deleteForm = (id) => {
        fetch(`http://localhost:3006/E.Commerce/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                alert("API data deleted successfully");
                const updatedData = data.filter((item) => item.id !== id);
                setData(updatedData);
            })
            .catch(() => alert("Error deleting data"));
    };

    const filterData = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:3006/E.Commerce/?q=${filter}`);
            setData(res.data);
        } catch {
            alert("Error filtering data");
        }
    };

    // Data Sorting

    const sortData = async (e) => {
        const value = e.target.value;
        setSort(value);
        try {
            const res = await axios.get(`http://localhost:3006/E.Commerce/?_sort=${value}&_order=asc`);
            setData(res.data);
        } catch {
            alert("Error sorting data");
        }
    };

    //To Calculate pagination

    const lastRecordIndex = page * records;
    const firstRecordIndex = lastRecordIndex - records;
    const currentData = data.slice(firstRecordIndex, lastRecordIndex);

    return (
        <div>
             {/* TO ADD BUTTON */}

            <Link to={"post"} className="btn btn-success">
                Add New(+)
            </Link>

            {/* TO ADD USER EMAIL AT THE TOP */}

            <i className="fa-solid fa-user">:{UserName()?.email}</i>

            {/* TO FILTER DATA ON THE PAGE */}

            <form onSubmit={filterData}>
                <input
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"/>
                <input type="submit" />
            </form>

            <select value={sort} onChange={sortData}>
                <option>--select--</option>
                {["productname", "price", "rating"].map((o) => (
                    <option key={o} value={o}>
                        {o}
                    </option>
                ))}
            </select>
            <div id="bb">
                {currentData.map((item) => (
                    <div id="cc" key={item.id}>
                        <img style={{ height: "250px", width: "300px" }} src={item.img} alt="#"></img>
                        <h3>{item.productname}</h3>
                        <p>{item.price}</p>
                        <p>{item.rating}</p>
                        <button
                            onClick={() => editForm(item.id)} className="btn btn-info">Edit</button>
                        <button
                            onClick={() => deleteForm(item.id)} className="btn btn-danger">Delete</button>
                        <button
                            onClick={() => addToCart(item.id)} className="btn btn-success">Add to cart</button>
                    </div>
                ))}
                
                <Pagination1
                    total={data.length}
                    records={records}
                    update={(page) => 
                    setPage(page)}/>
            </div>
        </div>
    );
}

export default Home1;
