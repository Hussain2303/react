import React, { useState } from 'react';

const CartComponent = () => {
  // Initialize the cart state as an empty array
  const [cart, setCart] = useState([]);

  // Sample product to add (you'd likely get this from props or API)
  const sampleProduct = { id: 1, name: 'Sample Product', price: 20 };

  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Spread existing items and add the new one
  };

  // Remove item from cart by filtering the cart array
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {/* List of Cart Items */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* Sample button to add a product to the cart */}
      <button onClick={() => addToCart(sampleProduct)}>Add Sample Product</button>
    </div>
  );
};

export default CartComponent;
