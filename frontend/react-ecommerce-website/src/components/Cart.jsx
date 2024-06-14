// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, totalAmount, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-700">Price: ${item.price}</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="bg-white p-4 shadow-md rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Total: ${totalAmount}</h3>
            <button
              onClick={handleClearCart}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
