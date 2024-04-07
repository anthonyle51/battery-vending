import React from 'react';
import './footer.css';
import Cart from './Cart.jsx';

const Footer = ({ cartItems, clearCart }) => {
    return (
        <div className="footer">
            <div className="checkout-cart">
                <Cart cartItems={cartItems} />
            </div>
            <div className='footer-btns'>
                <button className="checkout-button">Proceed to Checkout</button>
                <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    );
};

export default Footer;