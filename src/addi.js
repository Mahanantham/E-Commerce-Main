// import React from "react";
// import "./index.css";
// import Parent from "./parent";

// import{Route,BrowserRouter as Router,Routes} from "react-router-dom";
// import{Link} from "react-router-dom";


// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import FormValidation from "./formvalidation";

// const ob={
//     backgroundColor:"lightgreen",
//     padding:"10px",
//     listStyle:"none",
//     gap:"20px",
//     display:"flex"
// }

// const obj = {
//     backgroundColor: "red",
//     padding: "20px",
//     border: "3px black solid"

// }




// function App() {
//     let x = "hello"
//     return (
//         <div>
//             <div style={{ backgroundColor: "yellow", padding: "20px", border: "3px black solid" }}>
//                 <h1>Inline css</h1>
//                 <p>this is one of the css type {x} </p>
//                 <button>click</button>
//             </div>
//             <div style={obj}>
//                 <h1>Internal css</h1>
//                 <p>this is one of the css type {x}</p>
//                 <button>click</button>
//             </div>
//             <div className="data">
//                 <h1>external css</h1>
//                 <p>this is one of the css type {x} </p>
//                 <button>click</button>
//             </div>
//             <A y={x} />
//             <Parent m={x} />
//             <Ap/>
//         </div>

//     )
// }
// export default App;
// function A({ y }) {
//     return (
//         <div>
//             <h1>a component {y}</h1>
//             <B z={y} />
//         </div>
//     )
// }
// function B({ z }) {
//     const a = "best"
//     return (
//         <div>
//             <h1>b component {z} </h1>
//             <C q={a} />
            
//         </div>
//     )
// }
// function C({ q }) {
//     return (
//         <div>
//             <h1>c component {q}</h1>
//         </div>

//     )
// }

// function App() {
    
//     return (
//         <div>
//             <Router>
//             <ul style={ob}>

//                 <li><Link to={"/Home"}>Home</Link></li> 
//                 <li><Link to={"/About"}>About</Link></li>
//                 <li><Link to={"/contact"}>Contact</Link></li>
//                 <li><Link to={"/form"}>form</Link></li>
//             </ul>
//                 <Routes>
//                     <Route path="/Home" element={<Home/>}></Route>
//                     <Route path="/About" element={<About></About>}></Route>
//                     <Route path="/Contact" element={<Contact></Contact>}></Route>
//                     <Route path="/form" element={<FormValidation/>}/>
//                 </Routes>
//             </Router>
//         </div>
//     )
// }