// import { useEffect, useState } from "react";
// import axios from "axios"
// import "./index.css"
// import { Await, Link, useNavigate } from "react-router-dom";
// import UserName from "./user.js";
// // import filter from "react";
// // import Pagination from "./pagination.js";

// function Home() {

//     const [data, setData] = useState([])
//     const addtoCart = (id) => {
//         fetch("http://localhost:3006/E.Commerce/" + id, {
//             method: "GET"
//         }).then((res) => {
//             return res.json()
//         }).then((resp) => {
//             fetch("http://localhost:3006/Addtocart", {
//                 method: "POST",
//                 headers: { "Content-type": "application/json" },
//                 body: JSON.stringify(resp)
//             }).then(() => {
//                 alert("Data added to cart successfully")
//             }).catch(() => {
//                 alert("error")
//             })
//         });
//     }

//     useEffect(() => {

//         fetch("http://localhost:3006/E.Commerce", {
//             method: "GET"
//         }).then((res) => {
//             return res.json()
//         }).then((resp) => {
//             setData(resp)
//             console.log(resp)
//         });
//     }, []);
//     const Navigate = useNavigate()
//     const editform = (id) => {
//         Navigate("/edit/" + id)
//     }

//     const deleteForm = (id) => {
//         fetch("http://localhost:3006/E-commerce/" + id, {
//             method: "DELETE"
//         }).then(() => {
//             alert("Api Data deleted successfully")
//             const updatedData = data.filter((item) => item.id !== id);
//             setData(updatedData);
//         }).catch(() => {
//             alert("error")
//         })
//     }

//     const Username = UserName()

//     const [filter, setFilter] = useState()
//     const filter1 = (e) => {
//         setFilter(e.target.value)
//     }

//     const FilterData = async (e) => {
//         e.preventDefault()
//         return await axios.get(`http://localhost:3006/E.Commerce/?q=${filter}`)
//             .then((res) => {
//                 setData(res.data)
//             })
//             .catch(() => {
//                 alert("error")
//             })
//     }

//     const arr = ["productname", "price", "rating"]
//     const [sort, setSort] = useState()

//     const sortData = async (e) => {
//         e.preventDefault()

//         let value = e.target.value
//         setSort(value)

//         return await axios.get(`http://localhost:3006/E.Commerce/?_sort=${value}&_order=asc`)
//             .then((res) => {
//                 setData(res.data)
//             })
//             .catch(() => {
//                 alert("error")
//             })
//     }

//     const [page,setPage] = useState(1)
//     const [records,setRecords] = useState(3)

//     let lr = page*records  //1*3=3
//     let fr = lr - records  //3-3=0

//     let mydata=data.slice(fr, lr)
//     const change = (u) => {
//         setPage(u)
//     }


//     return (
//         <body>
//             <Link to={"post"} className="btn btn-success">Add New(+)</Link>
//             <i class="fa-solid fa-user">:{Username?.email}</i>
//             <form onSubmit={FilterData}>
//                 <input value={filter} onChange={filter1} type="text" />
//                 <input type="submit" />
//             </form>
//             <select value={sort} onChange={sortData}>
//                 <option>--select--</option>
//                 {arr.map((o) => (
//                     <option>{o}</option>
//                 ))}


//             </select>
//             <div id="bb">
//                 {mydata.map((i) => (

//                     <div id="cc">
//                         <img style={{ height: "250px", width: "300px" }} src={i.img} alt="#"></img>
//                         <h3>{i.productname}</h3>
//                         <p>{i.price}</p>
//                         <p>{i.rating}</p>
//                         <button onClick={() => { editform(i.id) }} className="btn btn-info">Edit</button>
//                         <button onClick={() => { deleteForm(i.id) }} className="btn btn-danger">Delete</button>
//                         <button onClick={() => { addtoCart(i.id) }} className="btn btn-success">Addtocart</button>
//                     </div>
//                 ))}
//                 <pagination total={data.length} records={records} update={change}/>
//             </div>
//         </body>
//     )



// }
// export default Home;




