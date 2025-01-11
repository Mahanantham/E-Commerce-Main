import React, { useState, useEffect } from "react";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Get cart items from localStorage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        if (storedCart) {
            setCartItems(storedCart);
        }
    }, []);

    // Function to handle removing items from the cart
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <i className="fa-solid fa-user-large" style={{ marginRight: "10px" }}></i>
            <span>{localStorage.getItem("userEmail")}</span>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.productname} className="cart-item-image" />
                            
                            <div className="cart-item-details">
                                <h3>{item.productname}</h3>
                                <p><strong>Price:</strong> {item.price}</p>
                                <p><strong>Rating:</strong> {item.rating}</p>
                            </div>

                            <div className="remove-button-container">
                                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                                Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
            
            {/* Buttons Section */}
            <div className="cart-buttons">
                <button onClick={() => window.history.back()} className="back-button">Back to Home</button>
            </div>
        </div>
    );
}

export default Cart;
