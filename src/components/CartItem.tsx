import axios from "axios";
import { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import AddToCart from "./AddToCart";

interface ICartItemProps {
  id: number;
  qty: number;
}

export default function CartItem({ id, qty }: ICartItemProps) {
  const [data, setData] = useState({} as IProductItemProps);

  useEffect(() => {
    axios(`http://localhost:3004/products/${id}`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);

  return (
    <div className="bg-slate-100 mb-4 grid grid-cols-12">
      <div className="col-span-10 text-right p-4">
        <h1 className="text-xl font-bold">{data.title}</h1>
        <p>
          تعداد : <span>{qty}</span>
        </p>
        <p className="rtl">
          قیمت محصول : <span>{data.price}$</span>
        </p>
        <AddToCart id={id.toString()} />
      </div>
      <img className="col-span-2" src={data.image} alt={data.title} />
    </div>
  );
}
