// import React from "react";
// import "./index.css";


// import{Route,BrowserRouter as Router,Routes} from "react-router-dom";



// import Post from "./post";
// import Edit from "./Edit";
// import Register1 from "./Register1.js";
// import Login from "./Login";
// import Home1 from "./home1.jsx";



// function App() {
    
//     return (
//         <div>
//             <Router>
           
//                 <Routes>

//                     <Route path="/home1" element={<Home1/>}/>
//                     <Route path="/post" element={<Post/>}/>
//                     <Route path="/edit/:empid"  element={<Edit/>}/>
//                     <Route path="/" element={<Register1/>}/>
//                     <Route path="/Login" element={<Login/>}/> 

//                 </Routes>
//             </Router>
//         </div>
//     )
// }
// export default App;


// project imports

import React from 'react';
import{Route,BrowserRouter as Router,Routes} from "react-router-dom";
import Homepro1 from './react1/home1pro.jsx';  // Correct path for Homepro
import Login from './react1/login pro.js';  // Correct path for Loginpro
import RegistrationForm from './react1/register pro.js';  // Correct path for Registerpro
import './index.css';
import Cart from './react1/extra pro.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home1" element={<Homepro1/>} /> {/* Home page route */}
                <Route path="/login" element={<Login/>} /> {/* Login page route */}
                <Route path="/" element={<RegistrationForm/>} /> {/* Registration route */}
                <Route path="/cart" element={<Cart/>} /> cart page
            </Routes>
        </Router>
         
    );
}

export default App;
