import React, { createContext, useState, useContext, useMemo } from 'react';
import shoppingCart from '../patterns/SingletonCart.js';

// Create the Context
const CartContext = createContext(null);

// Create the custom hook for easy access
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Create the Provider Component
export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(shoppingCart.getItems());

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    shoppingCart.addItem(item); // Use singleton for logic
    setCartItems([...shoppingCart.getItems()]); // Update state to re-render
  };

  const removeItemFromCart = (index) => {
    shoppingCart.removeItem(index);
    setCartItems([...shoppingCart.getItems()]);
  };

  // Function to clear the cart
  const clearCart = () => {
    shoppingCart.clearCart();
    setCartItems([]);
  };

  const value = useMemo(() => ({
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    cartCount: cartItems.length,
    cartTotal: shoppingCart.getTotal(),
  }), [cartItems]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};