import CartItem from "@/components/CartItem";
import Container from "@/components/Container";

export default function Cart() {
  return (
    <Container>
      <h1 className="text-right my-4">سبد خرید</h1>
      <div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="shadow-md text-right p-4">
        <h3>
          قیمت کل : <span>77$</span>
        </h3>
        <h3>
          سود شما ازین خرید : <span>77$</span>
        </h3>
        <h3>
          قیمت نهایی : <span>77$</span>
        </h3>
     <div>
        <button className="bg-sky-600 text-white px-4 py-1 rounded">اعمال کد تخفیف</button>
           <input className="rtl text-right border" placeholder="کد تخفیف را وارد کنید." type="text" />
     </div>
      </div>
    </Container>
  );
}
