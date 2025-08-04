"use client";

import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { formatNumberWithCommas } from "@/utils/number";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductItemProps[]>([]);

  useEffect(() => {
    axios("http://localhost:3004/products").then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);

  return (
    <Container>
      <h1 className="text-right my-4">سبد خرید</h1>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="shadow-md text-right p-4">
        <h3>
          قیمت کل :{" "}
          <span>
            {formatNumberWithCommas(
              cartItems.reduce((total, item) => {
                const selectedProduct = data.find(
                  (product) => product.id == item.id.toString()
                );

                return total + (selectedProduct?.price || 0) * item.qty;
              }, 0)
            )}
            $
          </span>
        </h3>
        <h3>
          سود شما ازین خرید : <span>77$</span>
        </h3>
        <h3>
          قیمت نهایی : <span>77$</span>
        </h3>
        <div>
          <button className="bg-sky-600 text-white px-4 py-1 rounded">
            اعمال کد تخفیف
          </button>
          <input
            className="rtl text-right border"
            placeholder="کد تخفیف را وارد کنید."
            type="text"
          />
        </div>
      </div>
    </Container>
  );
}
