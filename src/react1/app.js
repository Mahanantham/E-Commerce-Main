
import React from 'react';
import{Route,BrowserRouter as Router,Routes} from "react-router-dom";
import Homepro1 from './home1pro.jsx';  // Correct path for Homepro
import Login from './login pro.js';  // Correct path for Loginpro
import RegistrationForm from './register pro.js';  // Correct path for Registerpro
import './index.css';
import Cart from './extra pro.js';

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
