import React from "react";
import ProductList from "@/app/components/ProductList";
import ShopingCart from "@/app/components/ShopingCart";
import {CartProvider} from "@/app/context/ShopingContext";

export default function Question11() {
  return (
      <>
          <h3>
              11. Build a shopping cart application using the useContext hook.
              Set up a context to manage the state of the shopping cart.
              Create components to display products and a shopping cart.
              Use the useContext hook to access the cart state and update it.
              Allow users to add and remove items from the cart.
              Display the total price of items in the cart.
          </h3>
          <CartProvider >
              <div className="parent">
                  <h1>Shopping Cart Application</h1>
                  
                  <ShopingCart />
                  <ProductList />
              </div>
          </CartProvider >
      </>     
  )
};