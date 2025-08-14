"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type cartContextType = {
  cart: Product[];
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (productId: number) => void;
  totalPrice: number;
};

const CartContext = createContext<cartContextType | undefined>(undefined);

type CartProviderType = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderType) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addItemToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex( item => item.id === product.id );
      
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        const existingProduct = updatedCart[existingProductIndex];
        updatedCart[existingProductIndex] = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      return updatedCart;
    });
  };

  const totalPrice: number = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): cartContextType => useContext(CartContext);
