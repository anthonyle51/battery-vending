import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <h1>Plus Minus</h1>
            </div>
            <div className="discount">
                <h2>Batteries Recycled: 0</h2>
                <h2>Discount Applied: $0.00</h2>
            </div>
        </div>
    );
};

export default Navbar;