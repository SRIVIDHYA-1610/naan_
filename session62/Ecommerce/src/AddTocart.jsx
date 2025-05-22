import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function AddToCart({ product }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const inc = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (newQuantity === 1) addToCart(product); // add to cart only on first click
    else addToCart(product); // update quantity in cart
  };

  const dec = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      // Optional: you can handle decrement in context if needed
    }
  };

  return (
    <div>
      {quantity > 0 ? (
        <div className="flex items-center gap-2">
          <button className="bg-blue-700 text-white p-2 rounded-md" onClick={inc}>+</button>
          <span className="bg-white text-black px-4 py-2 rounded-md">{quantity}</span>
          <button className="bg-blue-700 text-white p-2 rounded-md" onClick={dec}>-</button>
        </div>
      ) : (
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md" onClick={inc}>
          Add to Cart
        </button>
      )}
    </div>
  );
}
