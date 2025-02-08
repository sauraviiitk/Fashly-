import React from 'react';
import Card from '../Card';
import { useNavigate } from 'react-router-dom';

function Womenttshirt() {
  const navigate=useNavigate();
  const handleProductClick = (product) => {
    navigate(`/product/${product.title}`, { state: { ...product, fromProductListing: true } });
  };

  const product = [
    {
      index: 21,
      title: "Bewakoof",
      imgsrc: [
        "https://m.media-amazon.com/images/I/612iheL73nL._AC_UL480_FMwebp_QL65_.jpg",
        "https://m.media-amazon.com/images/I/61ueuYqz0OL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/61NhS0STDiL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/61nibH6E4AL._SX522_.jpg"
      ],
      price: 22,
      description: "A timeless white t-shirt that pairs perfectly with any outfit.",
      materialComposition: "Cotton Blend",
      pattern: "Solid",
      fitType: "Loose Fit",
      sleeveType: "Half Sleeve",
      collarStyle: "Classic Collar",
      length: "Standard Length",
      countryOfOrigin: "India"
    },
    {
      index: 22,
      title: "Women's Tshirts",
      imgsrc: [
       "https://m.media-amazon.com/images/I/61kEKBqpXNL._SY550_.jpg",
       "https://m.media-amazon.com/images/I/51+h+7bmm9L._SX425_.jpg",
       "https://m.media-amazon.com/images/I/51kcPj6ss8L._SX425_.jpg",
       "https://m.media-amazon.com/images/I/51GImr+38kL._SX425_.jpg"
      ],
      price: 10,
      description: "A trendy t-shirt featuring bold and stylish graphics.",
      materialComposition: "Polyester Blend",
      pattern: "Graphic",
      fitType: "Regular Fit",
      sleeveType: "Short Sleeve",
      collarStyle: "Round Neck",
      length: "Cropped Length",
      countryOfOrigin: "India"
    },
    {
      index: 23,
      title: "Riobasic's",
      imgsrc: [
"https://m.media-amazon.com/images/I/71xO78Rag8L._SX466_.jpg",
"https://m.media-amazon.com/images/I/61puOtBVlbL._SX466_.jpg",
"https://m.media-amazon.com/images/I/61ri1kRPclL._SX466_.jpg",
"https://m.media-amazon.com/images/I/615KRIlbgIL._SX466_.jpg"
      ],
      price: 8,
      description: "A casual striped t-shirt for effortless everyday wear.",
      materialComposition: "Cotton",
      pattern: "Striped",
      fitType: "Slim Fit",
      sleeveType: "Cap Sleeve",
      collarStyle: "V-Neck",
      length: "Standard Length",
      countryOfOrigin: "India"
    },
    {
      index: 24,
      title: "Tisco's Originals",
      imgsrc: [
"https://m.media-amazon.com/images/I/61bnEeQQztL._SY679_.jpg",
"https://m.media-amazon.com/images/I/51X8DLfcHpL._SY550_.jpg",
"https://m.media-amazon.com/images/I/51xJaOH-Y-L._SY550_.jpg",
"https://m.media-amazon.com/images/I/71v+YkzJ1uL._SY550_.jpg"
      ],
      price: 15,
      description: "A sleek and versatile black tee, a wardrobe essential.",
      materialComposition: "Cotton Blend",
      pattern: "Solid",
      fitType: "Oversized Fit",
      sleeveType: "Half Sleeve",
      collarStyle: "High Collar",
      length: "Long Length",
      countryOfOrigin: "India"
    }
  ];

  return (


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4">
{product.map((product,index)=>(
 

<div key={index} onClick={()=>handleProductClick(product)}>

    <Card
       index={product.index}
       imgsrc={product.imgsrc[0]}
       title={product.title}
       price={product.price}
       description={product.description}
       materialComposition={product.materialComposition}
       pattern={product.pattern}
       fitType={product.fitType}
       sleeveType={product.sleeveType}
       collarStyle={product.collarStyle}
       length={product.length}
       countryOfOrigin={product.countryOfOrigin}



 />
</div>

))}
</div>




  );
}

export default Womenttshirt;
