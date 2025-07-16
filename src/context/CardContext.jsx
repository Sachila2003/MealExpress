import React, { createContext, useState, useContext, Children } from 'react';
import shoppingCart from '../patterns/singletonCart';

const CartContext = createContext();

export const useCart = () =>{
    return useContext(CartContext);
};

export const CartProvider = ({ Children }) => {
    const [cartItems, setCartItems] = useState(shoppingCart.getItems());

    const addItemToCart = (item) => {
        shoppingCart.addItem(item);

        setCartItems([...shoppingCart.getItems()]);

        alert(`"${item.getDescription()}" was added to your cart!`);
        console.log
    }
}