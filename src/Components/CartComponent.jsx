import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateItemQuantity } from '../redux/counter/cartSlice';
import Counter from './Counter'; 
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateItemQuantity({ id, quantity: newQuantity })); 
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='m-4'>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item d-flex">
              <img src={item.image} alt={item.title} height="100px" width="150px" className='m-4' />
              <div>
                <h4>{item.title}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
                <Counter 
                  initialCount={item.quantity} 
                  onCountChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}  // Quantity update logic
                />
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total m-4">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
