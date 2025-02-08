import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { useNavigate } from 'react-router-dom';
import { sortedproducts } from '../Sortingfn';
import { useSort } from '../Sortcontext';

function Analogwatches() {
  const navigate = useNavigate();
  const { sortoption } = useSort();
  const [sortedprod, setsortedprod] = useState([]);

  const products = [
    {
      index: 1,
      title: "Strap Analog Watch",
      imgsrc: [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRP1alFk0ewQ_DcMDH2GT_JIf1Z3-jZhTssmDhbFriqH4d-TF_XX05YZgh-nOF4O3IZ0Dd6RUT1_i6d0zFzQALj2CTcuLa8W0y9A3ftWgzNuE8J7XCcaawU",
        "https://m.media-amazon.com/images/I/81T-B-B6bCL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/819-bPwjLKL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81Vl5KOfbQL._SX679_.jpg",
      ],
      price: 369,
      description:
        "Matrix Dial Day & Date Functioning Strap Analog Watch, a stylish and functional watch perfect for both formal and casual occasions.",
    },
    {
      index: 2,
      title: "Carlington Resin Endurance Analog",
      imgsrc: [
        "https://m.media-amazon.com/images/I/71RlAIwzj5L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/51FWpkYz7GL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61T715k9i7L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/614YydBv1uL._SX679_.jpg",
      ],
      price: 2990,
      description:
        "Carlington Resin Endurance Analog-Digital Sports Watch, perfect for those who need durability and versatility in their accessories.",
    },
    {
      index: 3,
      title: "Matrix",
      price: 48,
      imgsrc: [
        "https://m.media-amazon.com/images/I/71Ye8QUZjBL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71P-bNpcXzL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/81BUuJ4jEyL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/81Taz-oX3GL._SX522_.jpg",
      ],
      description:
        "Matrix Antique 2.0 Day & Date Softest Silicone Strap Analog Watch, a unique blend of vintage style and modern comfort.",
    },
    {
      index: 4,
      title: "Carlington",
      price: 15,
      imgsrc: [
        "https://m.media-amazon.com/images/I/71mcYsKZJHL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71aP0L4USNL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/716yvV6lWzL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71M3HoMdL8L._SX522_.jpg",
      ],
      description:
        "Carlington Resin Endurance Analog-Digital Sports Watch, an affordable yet durable option for active individuals.",
    },
  ];

  useEffect(() => {
    const sorted = sortedproducts(products, sortoption);
    setsortedprod(sorted);
  }, [sortoption]);

  const handleProductClick = (product) => {
    navigate(`/product/${product.title}`, {
      state: { ...product, fromProductListing: true },
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4">
      {sortedprod.map((product) => (
        <div key={product.index} onClick={() => handleProductClick(product)}>
          <Card
            index={product.index}
            imgsrc={product.imgsrc[0]}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Analogwatches;
