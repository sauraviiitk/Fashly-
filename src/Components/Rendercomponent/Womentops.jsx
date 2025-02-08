import { useNavigate } from "react-router-dom";
import Card from "../Card";

function Womentops() {
  const navigate = useNavigate();

  const products = [
    {
      index: 17,
      title: "Basic White T-shirt",
      imgsrc: [
        "https://m.media-amazon.com/images/I/81gVKUkQLqL._SY879_.jpg",
        " https://m.media-amazon.com/images/I/81wbUvDUH7L._SY550_.jpg",
        "https://m.media-amazon.com/images/I/81+PrGHYGJL._SY550_.jpg ",
        " https://m.media-amazon.com/images/I/71ISepZVWML._SY550_.jpg"
       
      ],      price: 20,
      description: "A stylish crop top with bold stripes for a chic look.",
      rating: 4.5,
      reviews: 120,
    },
    {
      index: 18,
      title: "Casual Blue Tee",
      imgsrc: [
     " https://m.media-amazon.com/images/I/81hv2Co7FmL._SY679_.jpg",
     "https://m.media-amazon.com/images/I/81GI70hOsvL._SY550_.jpg ",
     "https://m.media-amazon.com/images/I/81BZXvxDZSL._SY550_.jpg ",
     "https://m.media-amazon.com/images/I/71yaTbrdt8L._SY550_.jpg ",
     
      ],      price: 30,
      description: "A vibrant top with a cheerful print to brighten your wardrobe.",
      rating: 4.0,
      reviews: 95,
    },
    {
      index: 19,
      title: "Vibrant Yellow Top",
      price: 18,
      imgsrc: [
        "https://m.media-amazon.com/images/I/81O1SwzDxEL._SY679_.jpg ",
        "https://m.media-amazon.com/images/I/81b5gYmeBoL._SY550_.jpg ",
        "https://m.media-amazon.com/images/I/81bOe3i8t0L._SY550_.jpg ",
        "https://m.media-amazon.com/images/I/71ddJF1GcsL._SY550_.jpg "
      ],      description: "A trendy and relaxed-fit t-shirt perfect for casual outings.",
      rating: 4.8,
      reviews: 200,
    },
    {
      index: 20,
      title: "Ruffled Sleeve Top",
      price: 25,
      imgsrc: [
        " https://m.media-amazon.com/images/I/81-GJANQqlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81tVM7vNczL._SX522_.jpg ",
        " https://m.media-amazon.com/images/I/81FjprOjUrL._SY550_.jpg",
        "https://m.media-amazon.com/images/I/71lgexyJivL._SY550_.jpg "

      ],      description: "A classic and versatile cotton t-shirt for everyday comfort.",
      rating: 4.2,
      reviews: 110,
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

export default Womentops;
