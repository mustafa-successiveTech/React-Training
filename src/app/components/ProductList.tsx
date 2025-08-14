import React from "react";
import { useCart } from "../context/ShopingContext";

interface ProductType {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function ProductList() {
  const { addItemToCart } = useCart();

  const products = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 40 },
  ];

  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product: ProductType) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
