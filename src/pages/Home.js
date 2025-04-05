import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const dummyProducts = [
  { id: 1, name: 'Wireless Mouse', price: 19.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 59.99 },
  { id: 3, name: 'USB-C Hub', price: 24.99 },
  { id: 4, name: 'Noise Cancelling Headphones', price: 89.99 },
  { id: 5, name: 'Portable SSD 1TB', price: 99.99 },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    setTimeout(() => setProducts(dummyProducts), 500);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Featured Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
