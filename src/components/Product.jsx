import React from 'react';

const Product = ({ product, onAddToCart }) => {
    return (
        <div className="product" onClick={() => onAddToCart(product)} style={{ cursor: 'pointer', margin: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
            <img src={'src/assets/batteries/' + product.imageURL} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px' }}></img>
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
        </div>
    );
};

export default Product;

// <img src={'../assets/batteries' + product.imageURL}></img>