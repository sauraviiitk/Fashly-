import { useNavigate } from "react-router-dom";
import Card from "../Card";

function Bedsheets() {
  const navigate = useNavigate();

  const products = [
    {
      index: 9,
      title: "Floral Printed Bedsheet",
      imgsrc: "https://m.media-amazon.com/images/I/41QdxHAqSrL._SY300_SX300_QL70_FMwebp_.jpg",
      price: 25,
      description: "Soft cotton bedsheet with vibrant floral patterns.",
      rating: 4.5,
      reviews: 200,
    },
    {
      index: 10,
      title: "Luxury Satin Bedsheet",
      imgsrc: "https://m.media-amazon.com/images/I/41x5X+Pg-6L._SY300_SX300_PQ10_.jpg",
      price: 40,
      description: "Elegant satin bedsheet for a luxurious sleeping experience.",
      rating: 4.8,
      reviews: 150,
    },
    {
      index: 11,
      title: "Abstract Pattern Bedsheet",
      imgsrc: "https://m.media-amazon.com/images/I/51ApqV2inSL._SY300_SX300_QL70_FMwebp_.jpg",
      price: 30,
      description: "Modern bedsheet with trendy abstract patterns.",
      rating: 4.7,
      reviews: 180,
    },
    {
      index: 12,
      title: "Classic Striped Bedsheet",
      imgsrc: "https://m.media-amazon.com/images/I/41v8NTWyd6L._SX300_SY300_QL70_FMwebp_.jpg",
      price: 35,
      description: "Timeless striped bedsheet perfect for any bedroom decor.",
      rating: 4.6,
      reviews: 170,
    },
  ];

  const handleProductClick = (product) => {
    navigate(`/product/${product.title}`, { state: { ...product, fromProductListing: true } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4">
      {products.map((product, index) => (
        <div key={index} onClick={() => handleProductClick(product)} className="cursor-pointer hover:shadow-lg transition-shadow">
          <Card
            index={product.index}
            imgsrc={product.imgsrc}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Bedsheets;
