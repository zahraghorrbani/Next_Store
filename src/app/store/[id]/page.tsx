import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";

interface IProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ q: string }>;
}
export default async function Product({ params }: IProductProps) {
  const { id } = await params;
  const result = await fetch(`http://localhost:3004/products/${id}`);
  const data = (await result.json()) as IProductItemProps;
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-9 rtl text-right p-4">
          <h2 className="font-bold text-2xl">{data.title}</h2>
          <p className="text-gray-600">{data.description}</p>
          <p className="font-bold ">
            قیمت : <span>{data.price}$</span>
          </p>

          <div className="mt-4">
            <button className="px-4 py-2 bg-sky-500 rounded text-white">
              +
            </button>
            <span className="mx-4">3</span>
            <button className="px-4 py-2 bg-sky-500 rounded text-white">
              -
            </button>
          </div>
        </div>
        <div className="col-span-3">
          <img src={data.image} alt={data.title} />
        </div>
      </div>
    </Container>
  );
}
