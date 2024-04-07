import React from 'react';

const Product = ({ product, onAddToCart }) => {
    console.log(product.imageURL)
    return (
        <div className="product" onClick={() => onAddToCart(product)} style={{ cursor: 'pointer', margin: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
            <img src={'public/images/batteries/' + product.imageURL} alt={product.imageURL} style={{ maxWidth: '100px', maxHeight: '100px' }}></img>
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
        </div>
    );
};

export default Product;

// <img src={'public/images/batteries/' + product.imageURL}></img>