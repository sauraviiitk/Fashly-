import { useNavigate } from "react-router-dom";
import Card from "../Card";

function BikeCovers() {
  const navigate = useNavigate();

  const products = [
    {
      index: 13,
      title: "All-Weather Bike Cover",
      imgsrc: "https://m.media-amazon.com/images/I/41RIlyMLHvL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 20,
      description: "Durable, waterproof cover to protect your bike in all seasons.",
      rating: 4.5,
      reviews: 210,
    },
    {
      index: 14,
      title: "Premium Bike Dust Cover",
      imgsrc: "https://m.media-amazon.com/images/I/41UuWwd-vQL._SY300_SX300_QL70_FMwebp_.jpg",
      price: 25,
      description: "High-quality dust cover to keep your bike clean and scratch-free.",
      rating: 4.7,
      reviews: 190,
    },
    {
      index: 15,
      title: "UV-Resistant Bike Cover",
      imgsrc: "https://m.media-amazon.com/images/I/41fiiUMeoKS._SX300_SY300_QL70_FMwebp_.jpg",
      price: 22,
      description: "UV-resistant bike cover to shield your bike from sun damage.",
      rating: 4.6,
      reviews: 160,
    },
    {
      index: 16,
      title: "Compact Foldable Bike Cover",
      imgsrc: "https://m.media-amazon.com/images/I/41w0LXDrBHL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 18,
      description: "Lightweight and foldable bike cover for easy portability.",
      rating: 4.4,
      reviews: 120,
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

export default BikeCovers;
