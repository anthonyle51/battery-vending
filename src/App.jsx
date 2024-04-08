import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Selection from './components/Selection'; // Ensure this is the correct path to your component

function App() {
  const [cart, setCart] = useState([]);

  const onAddToCart = (product) => {
    setCart(currentCart => {
      const productExists = currentCart.find(item => item.id === product.id);
      if (productExists) {
        return currentCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCart([]); // Clears the cart
  };

  return (
    <div className="App">
      <Navbar />
      <Selection onAddToCart={onAddToCart} />
      <Footer cartItems={cart} clearCart={clearCart}/>
    </div>
  );
};

export default App;

