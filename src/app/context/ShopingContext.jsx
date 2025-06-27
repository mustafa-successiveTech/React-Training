"use client"
import React,  { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItemToCart = (product) => {
        
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);

            if( existingProductIndex !== -1 ) {

                const updatedCart = [...prevCart];
                const existingProduct = updatedCart[existingProductIndex];

                updatedCart[existingProductIndex] = {
                    ...existingProduct,
                    quantity: existingProduct.quantity + 1,
                }

                return updatedCart;
                
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }

    const removeItemFromCart = (productId) => {
        setCart((prevCart) => {

            const updatedCart = prevCart.map((item) => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity - 1 };
                }

                return item;
            }).filter(item => item.quantity > 0); 

            return updatedCart;
        });
    };

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

