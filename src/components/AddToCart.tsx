"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface IAddToCartProps {
  id: string;
}
export default function AddToCart({ id }: IAddToCartProps) {
  const { cartItems, handleIncreaseProductQty } = useShoppingCartContext();
  console.log(cartItems);

  return (
    <div className="mt-4">
      <button
        onClick={() => handleIncreaseProductQty(parseInt(id))}
        className="px-4 py-2 bg-sky-500 rounded text-white"
      >
        +
      </button>
      <span className="mx-4">3</span>
      <button className="px-4 py-2 bg-sky-500 rounded text-white">-</button>
    </div>
  );
}
