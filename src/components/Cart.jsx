import React from 'react';

const Cart = ({ cartItems }) => {
  if (!cartItems || cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h3>Your Cart</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <div>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</div>
    </div>
  );
};

export default Cart;