import { Link } from "react-router-dom";
import { useCart } from "./Cartcontext";

function Card({ index, imgsrc, title, description, price }) {
  const { addtocart } = useCart();

  const product = {
    index,
    imgsrc,
    title,
    description,
    price,
  };

  return (
    <div className="bg-white m-3 sm:m-4 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105">
      <Link to={`/product/${title}`}>
        <img
          src={imgsrc}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-56 object-contain p-2"
        />
      </Link>

      <div className="p-3 sm:p-4">
        <Link to={`/product/${title}`}>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h3>
        </Link>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-lg font-bold">${price}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addtocart(product);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mt-2 sm:mt-0"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
