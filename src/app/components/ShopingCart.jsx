import React from "react";
import {useCart} from "./../context/ShopingContext";

export default function ShopingCart() {
    const { cart, removeItemFromCart, totalPrice } = useCart();

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your Cart is Empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                                <button onClick = {() => 
                                    removeItemFromCart(item.id)
                                    }
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice}</h3>
                </div>
            )}
        </div>    
    )
}