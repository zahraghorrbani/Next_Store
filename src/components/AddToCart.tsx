"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface IAddToCartProps {
  id: string;
}
export default function AddToCart({ id }: IAddToCartProps) {
  const {
    cartItems,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
    getProductQty,
  } = useShoppingCartContext();
  console.log(cartItems);

  return (
    <div>
      <div className="mt-4">
        <button
          onClick={() => handleIncreaseProductQty(parseInt(id))}
          className="px-4 py-2 bg-sky-500 rounded text-white"
        >
          +
        </button>
        <span className="mx-4">{getProductQty(parseInt(id))}</span>
        <button
          onClick={() => handleDecreaseProductQty(parseInt(id))}
          className="px-4 py-2 bg-sky-500 rounded text-white"
        >
          -
        </button>
      </div>
      <button
        onClick={() => handleRemoveProduct(parseInt(id))}
        className="bg-red-500 text-white rounded px-7 py-2 mt-2"
      >
        حذف از سبد
      </button>
    </div>
  );
}
