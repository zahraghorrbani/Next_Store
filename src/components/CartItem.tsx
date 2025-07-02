export default function CartItem() {
  return (
    <div className="bg-slate-100 mb-4 grid grid-cols-12">
      <div className="col-span-10 text-right p-4">
        <h1 className="text-xl font-bold">محصول یک</h1>
        <p>
          تعداد : <span>3</span>
        </p>
        <p className="rtl">
          قیمت محصول : <span>45$</span>
        </p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-sky-500 rounded text-white">+</button>
          <span className="mx-4">3</span>
          <button className="px-4 py-2 bg-sky-500 rounded text-white">-</button>
        </div>
      </div>
      <img
        className="col-span-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
        alt=""
      />
    </div>
  );
}
