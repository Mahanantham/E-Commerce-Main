import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Paginationpro from "./pagination pro";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

function Homepro1() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1); // Current page
    const [records, setRecords] = useState(6); // Records per page
    const [filter, setFilter] = useState(""); // Filter value
    const [sort, setSort] = useState(""); // Sort value
    const [cartCount, setCartCount] = useState(0);

    const navigate = useNavigate();

    // Fetch data on component load
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("https://e-commerce-t5o1.onrender.com/E.Commerce", {
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

    //add to cart

    const addToCart = (id) => {
        fetch(`https://e-commerce-t5o1.onrender.com/E.Commerce/${id}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((resp) => {
                // Check if there's already a cart in localStorage
                let cart = JSON.parse(localStorage.getItem("cart")) || [];

                // Add the product to the cart
                cart.push(resp);

                // Save updated cart to localStorage
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Data added to cart successfully");
                // navigate("/cart");     // Redirect to Cart page
            })
            .catch(() => alert("Error adding to cart"));
    };
    useEffect(() => {
        fetchData();
        updateCartCount();
    }, []);
    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartCount(cart.length);
    };

    const editForm = (id) => {
        navigate(`/edit/${id}`);
    };

    // Delete Form
    const deleteForm = (id) => {
        fetch(`https://e-commerce-t5o1.onrender.com/E.Commerce/${id}`, {
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
            const res = await axios.get(`https://e-commerce-t5o1.onrender.com/E.Commerce/?q=${filter}`);
            setData(res.data);
        } catch {
            alert("Error filtering data");
        }
    };

    const sortData = async (e) => {
        const value = e.target.value;
        setSort(value);
        try {
            const res = await axios.get(`https://e-commerce-t5o1.onrender.com/E.Commerce/?_sort=${value}&_order=asc`);
            setData(res.data);
        } catch {
            alert("Error sorting data");
        }
    };

    // To Calculate pagination
    const lastRecordIndex = page * records;
    const firstRecordIndex = lastRecordIndex - records;
    const currentData = data.slice(firstRecordIndex, lastRecordIndex);

    // Logout functionality
    const logout = () => {
        localStorage.removeItem("userEmail");
        navigate("/login");
    };

    const navigateToCart = () => {
        navigate("/cart")
    };

    return (
        <div>
            <div className="header">
                {/* Search Box on the Left */}
                <form onSubmit={filterData} className="search-form">
                    <input
                        type="text"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        placeholder="Search products"
                        className="search-input"/>
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>

                {/* User Info on the Right */}
                <div className="user-info">
                    <div className="cart-icon" onClick={navigateToCart} style={{ cursor: "pointer" }}>
                        <i className="fa-solid fa-cart-shopping" style={{ marginRight: "5px", color: "darkviolet" }}></i>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </div>
                    <i className="fa-solid fa-user-large" style={{ marginRight: "10px" }}></i>
                    <span>{localStorage.getItem("userEmail")}</span>
                    <button onClick={logout} className="logout-button">
                        Logout
                    </button>
                </div>
            </div>


            {/* Main Section */}
            <div className="main-content">
                {/* Left Side - Product Catalog and Filters */}
                <div className="product-catalog">
                    <h2 style={{ color: "darkmagenta" }}><u>Product Catalog</u></h2>
                    <select onChange={sortData} value={sort} className="sort-select">
                        <option value="">--- Select ---</option>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                    </select>

                    {/* Filter Section */}
                    <form onSubmit={filterData} className="filter-form">
                        <input
                            type="text"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            placeholder="Filter by product name"
                            className="filter-input"/>
                        <button type="submit" className="filter-button">
                            Filter
                        </button>
                    </form>
                </div>

                {/* Right Side - Product Listing */}
                <div className="product-listing">
                    <h2 style={{ color: "darkmagenta" }}><marquee><strong>Products In Our Website</strong></marquee></h2>

                    <div className="products-container">
                        {currentData.map((item) => (
                            <div className="product-card" key={item.id}>
                                <div className="product-image">
                                    <img style={{ height: "150px", width: "200px" }} src={item.img} alt={item.productname} />
                                </div>
                                <div className="product-details">
                                    <h3><strong>{item.productname}</strong></h3>
                                    <p><strong>Price: {item.price}</strong></p>
                                    <p><strong>Rating:{item.rating}</strong></p>
                                    <div className="product-actions">
                                        {/* <button onClick={() => editForm(item.id)} className="btn btn-info">
                                            Edit
                                        </button>
                                        <button onClick={() => deleteForm(item.id)} className="btn btn-danger">
                                            Delete
                                        </button> */}
                                        <button onClick={() => addToCart(item.id)} className="btn btn-success" ><i class="fa-solid fa-cart-shopping" style={{ marginRight: "5px" }}></i>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Paginationpro
                            total={data.length}
                            records={records}
                            update={setPage}
                            currentPage={page}/>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="footer">
                <div className="footer-container">
                    {/* Logo & Slogan */}
                    <div className="footer-logo">
                        <h1 style={{ color: "darkmagenta" }}><u>Logo</u></h1>
                        <p>Subline</p>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <h3 style={{ color: "darkmagenta" }}><u>About Us</u></h3>
                            <li><Link to="/expertise">Our Expertise</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                        </ul>
                    </div>
                    <div className="footer-help">
                        <ul>
                            <h3 style={{ color: "darkmagenta" }}><u>Legal and Help</u></h3>
                            <li><Link to="/faqs">FAQ's</Link></li>
                            <li><Link to="/terms">Terms of Use</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h3 style={{ color: "darkmagenta" }}><u>Contact Us</u></h3>
                        <p><i class="fa-solid fa-location-dot" style={{ marginRight: "11px" }}></i>Address</p>
                        <p><i class="fa-solid fa-phone" style={{ marginRight: "8px" }}></i>Phone</p>
                        <p><i class="fa-solid fa-m" style={{ marginRight: "10px" }}></i>Email</p>
                    </div>

                    {/* Social Links */}
                    <div className="footer-social">
                        <h3 style={{ color: "darkmagenta" }}><u>Follow Us</u></h3>
                        <div id="sociallogo">
                            <i class="fa-brands fa-facebook" style={{ marginRight: "8px" }}></i>
                            <i class="fa-brands fa-instagram" style={{ marginRight: "8px" }}></i>
                            <i class="fa-brands fa-twitter" style={{ marginRight: "8px" }}></i>
                            <i class="fa-brands fa-linkedin" style={{ marginRight: "8px" }}></i>
                        </div>
                        <ul>
                            <li><i class="fa-brands fa-google-play" style={{ marginRight: "8px" }}></i><Link to="/google-play">Google Play</Link></li>
                            <li><i class="fa-brands fa-apple" style={{ marginRight: "8px" }}></i><Link to="/apple-store">Apple Store</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>© {new Date().getFullYear()} MAHANANTHAM1008. All rights reserved.</p>
                </div>
            </div >
        </div >
    );
}

export default Homepro1;
