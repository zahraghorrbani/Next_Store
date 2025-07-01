import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";

export default function Store() {
  const data = [
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
      title: "محصول یک",
      description: "عاعاعاعهاااااااااا",
      price: 20,
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
      title: "دو یک",
      description: "عاعاعاعهاااااااااا",
      price: 30,
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
      title: "محصول سه",
      description: "عاعاعاعهاااااااااا",
      price: 60,
    },
    {
      id: "4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
      title: "محصول چهار",
      description: "عاعاعاعهاااااااااا",
      price: 70,
    },
  ];

  return (
    <Container>
      <h1 className="text-right py-4">خانه</h1>
      <div className="grid grid-cols-4 gap-4">
        {
            data.map((data)=>(
                <ProductItem key={data.id} {...data}/>
            ))
        }
      </div>
    </Container>
  );
}
