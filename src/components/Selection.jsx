import React from 'react';
import Product from './Product';

const Selection = ({ onAddToCart }) => {
    const products = [
        { id: 1, name: 'Lithium AA', price: 5.99, imageUrl: 'energizer-lithium-AA.jpg' },
        { id: 2, name: 'Lithium AAA', price: 6.99, imageUrl: 'energizer-lithium-AAA.webp' },
        { id: 3, name: 'Alkaline AA', price: 5.99, imageUrl: 'duracell-alkaline-AA.jpg' },
        { id: 4, name: 'Alkaline AAA', price: 6.99, imageUrl: 'energizer-alkaline-AAA.jpg' },
        
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {products.map(product => (
                <Product key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default Selection;