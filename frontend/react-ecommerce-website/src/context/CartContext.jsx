import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Añadir al carrito
  const addToCart = (product) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += product.quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Eliminar del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Limpiar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular el total del carrito
  const totalAmount = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    totalAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
