import { useNavigate } from "react-router-dom";
import Card from "../Card";
import { useSort } from "../Sortcontext";
import { useEffect, useState } from "react";
import { sortedproducts } from "../Sortingfn";

function Bangles() {
  const navigate = useNavigate();
  const { sortoption } = useSort();
  const [sortprod, setsortprod] = useState([]);

  const products = [
    {
      index: 5,
      title: "Elegant Pearl Bangles",
      imgsrc: [
        "https://m.media-amazon.com/images/I/81gv3f0ajnL._SY575_.jpg",
        "https://m.media-amazon.com/images/I/71GwuzYcM1L._SY395_.jpg",
        "https://m.media-amazon.com/images/I/71Bp8DIgWJL._SY395_.jpg",
        "https://m.media-amazon.com/images/I/81kcHA9J8oL._SY395_.jpg"
      ],
      price: 45,
      description: "Beautiful pearl-studded bangles for a timeless look.",
      fullDescription: "These elegant pearl-studded bangles add a touch of sophistication to any outfit. The smooth finish and high-quality craftsmanship make them a timeless addition to your jewelry collection. Whether for casual wear or formal events, these bangles offer a perfect blend of elegance and style.",
      Casediameter: "45mm",
      bandcolor: "White",
      bandMaterial: "Pearl",
      warrantyType: "Retailer",
      countryOfOrigin: "India",
    },
    {
      index: 6,
      title: "Gold-Plated Bangles",
      imgsrc: [
        "https://m.media-amazon.com/images/I/71PEga5FlwL._SY535_.jpg",
        "https://m.media-amazon.com/images/I/71NtAIuMh0L._SX395_.jpg",
        "https://m.media-amazon.com/images/I/81cnbPa5+1L._SY395_.jpg",
        "https://m.media-amazon.com/images/I/71L43-BunOL._SY535_.jpg"
      ],
      price: 60,
      description: "Stylish gold-plated bangles for an elegant touch.",
      fullDescription: "These gold-plated bangles offer a sophisticated touch for any occasion. The premium plating ensures long-lasting shine, and the sleek design makes them perfect for both casual and formal outfits. These bangles are a statement piece that will never go out of style.",
      Casediameter: "40mm",
      bandcolor: "Gold",
      bandMaterial: "Gold-Plated",
      warrantyType: "Retailer",
      countryOfOrigin: "India",
    },
    {
      index: 7,
      title: "Traditional Stone Bangles",
      imgsrc: [
        "https://m.media-amazon.com/images/I/81kBCT+y+RL._SY575_.jpg",
        "https://m.media-amazon.com/images/I/819UhbMjBLL._SY395_.jpg",
        "https://m.media-amazon.com/images/I/81ZjH1ZgtzL._SY395_.jpg",
        "https://m.media-amazon.com/images/I/61yaT1l-kmL._SY395_.jpg"
      ],
      price: 75,
      description: "Intricate stonework bangles perfect for festive occasions.",
      fullDescription: "These traditional stone bangles feature intricate stonework, adding a vibrant touch to your festive wardrobe. Perfect for weddings, parties, or any celebration, these bangles combine traditional craftsmanship with modern design, making them a must-have accessory.",
      Casediameter: "50mm",
      bandcolor: "Red",
      bandMaterial: "Stone",
      warrantyType: "Retailer",
      countryOfOrigin: "India",
    },
    {
      index: 8,
      title: "Designer Bangles Set",
      imgsrc: [
        "https://m.media-amazon.com/images/I/91CscvKBy8L._SX500_.jpg",
        "https://m.media-amazon.com/images/I/61xUbmwH0eL._SY535_.jpg",
        "https://m.media-amazon.com/images/I/7198-O7hXdL._SY535_.jpg",
        "https://m.media-amazon.com/images/I/713RO2PaKyL._SY500_.jpg"
      ],
      price: 50,
      description: "A set of designer bangles to complement your outfit.",
      fullDescription: "This set of designer bangles is the perfect accessory for adding a touch of class and sophistication to any outfit. Whether you're dressing up for a special event or adding a fashionable touch to your everyday look, these bangles are versatile and stylish.",
      Casediameter: "48mm",
      bandcolor: "Silver",
      bandMaterial: "Metal",
      warrantyType: "Retailer",
      countryOfOrigin: "India",
    },
  ];

  useEffect(() => {
    setsortprod(sortedproducts(products, sortoption));
  }, [sortoption]);

  const handleProductClick = (product) => {
    navigate(`/product/${product.title}`, { state: { ...product, fromProductListing: true } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4">
      {sortprod.map((product, index) => (
        <div key={index} onClick={() => handleProductClick(product)} className="cursor-pointer hover:shadow-lg transition-shadow">
          <Card
            index={product.index}
            imgsrc={product.imgsrc[0]}
            title={product.title}
            price={product.price}
            description={product.description}
            Casediameter={product.Casediameter}
            bandcolor={product.bandcolor}
            bandMaterial={product.bandMaterial}
            warrantyType={product.warrantyType}
            countryOfOrigin={product.countryOfOrigin}
          />
        </div>
      ))}
    </div>
  );
}

export default Bangles;
