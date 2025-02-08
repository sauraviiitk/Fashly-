import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Review from "./Review";
import { useCart } from "./Cartcontext";

function ProductDetails() {
  const { addtocart } = useCart();
  const [iscart, setiscart] = useState(false);
  const location = useLocation();
  const [product, setProduct] = useState(location.state || null);
  const [hoverImg, setHoverImg] = useState(null);
  const [currentimg, setcurrentimg] = useState("https://example.com/fallback-image.jpg");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location.state) {
      setProduct({
        title: "Fallback Product Title",
        imgsrc: ["https://example.com/fallback-image.jpg"],
        description: "Fallback product description",
        Casediameter: "42mm",
        price: 20,
        bandcolor: "black",
        fullDescription: "This is a detailed description of the product.",
      });
    } else {
      setProduct(location.state);
    }
  }, [location.state]);

  useEffect(() => {
    if (product?.imgsrc && Array.isArray(product.imgsrc)) {
      setcurrentimg(product.imgsrc[0]);
    }
  }, [product]);

  const handleaddtocart = () => {
    addtocart(product); // Pass product to the cart
    setiscart(true);
  };

  if (error) return <div className="text-red-600 text-center">{error}</div>;
  if (!product) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="border-b-2 pb-4 flex flex-col lg:flex-row items-center">
        {/* Image Thumbnail Section */}
        <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2">
          {Array.isArray(product.imgsrc) ? (
            product.imgsrc.map((angle, index) => (
              <img
                key={index}
                onMouseEnter={() => setHoverImg(angle)}
                onMouseLeave={() => setHoverImg(null)}
                onClick={() => setcurrentimg(angle)}
                src={angle}
                alt={`Product view ${index + 1}`}
                className="w-16 h-16 object-cover cursor-pointer border p-1 rounded"
              />
            ))
          ) : (
            <img
              src={product.imgsrc}
              alt="Product"
              className="w-16 h-16 object-cover cursor-pointer border p-1 rounded"
            />
          )}
        </div>

        {/* Main Product View */}
        <div className="w-full lg:w-2/3 p-4">
          <img
            src={hoverImg || currentimg}
            alt={product.title}
            className="w-full h-80 object-contain shadow-md rounded-md"
          />
        </div>

        {/* Product Info Section */}
        <div className="w-full lg:w-1/3 p-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-sm text-red-700 mt-2">Limited time Deal</p>
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl font-bold text-green-600">₹{product.price}</p>
            <span className="bg-red-600 text-white px-2 py-1 rounded-md">-83%</span>
          </div>
          <p className="text-sm">M.R.P: ₹<s>2333</s></p>
          <p className="font-bold">Inclusive of all taxes</p>
          <p className="text-gray-700 mt-2">{product.description}</p>

          {/* Buy Section */}
          <div className="mt-4 p-4 border shadow-md rounded-md">
            <p className="text-2xl font-bold">₹{product.price}/-</p>
            <p className="text-sm text-green-600">In Stock</p>
            <div className="mt-2 flex flex-col gap-2">
              <button
                className="bg-orange-600 text-white py-2 rounded-md"
                onClick={handleaddtocart}
                disabled={iscart}
              >
                {iscart ? "Added to Cart" : "Add to Cart"}
              </button>
              <button className="bg-yellow-600 text-white py-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-8 px-4">
        <h2 className="text-xl font-bold">Product Description</h2>
        <p>{product.fullDescription || "No detailed description available."}</p>
      </div>

      {/* Reviews Section */}
      <div className="mt-8 px-4">
        <Review />
      </div>
    </div>
  );
}

export default ProductDetails;
