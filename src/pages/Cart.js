import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <strong>{item.name}</strong> - ${item.price.toFixed(2)}
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '1rem' }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
