import { useCart } from "./Cartcontext";

function Cart() {
  const { cart, updateCart, removeFromCart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = Math.floor(subtotal * 0.1);
  const total = subtotal + tax;

  const handleIncrease = (item) => {
    updateCart(item.index, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateCart(item.index, item.quantity - 1);
    } else {
      removeFromCart(item.index);
    }
  };

  const handleDelete = (item) => {
    removeFromCart(item.index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
        
        <div className="w-full lg:w-2/3 border-r p-4 sm:p-6">
          {cart.length === 0 ? (
            <p className="text-center text-lg sm:text-xl font-semibold py-10 sm:py-20">
              Your cart is empty
            </p>
          ) : (
            cart.map((item) => (
              <div key={item.index} className="flex flex-col md:flex-row items-center border-b py-4">
                
                <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
                  <img className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-md" src={item.imgsrc} alt={item.title} />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                  <p className="text-lg sm:text-xl font-semibold">{item.title}</p>
                  <div className="flex items-center justify-center md:justify-start mt-2 space-x-2 sm:space-x-3">
                    <button onClick={() => handleDecrease(item)} className="px-2 sm:px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">
                      -
                    </button>
                    <span className="text-gray-700 font-medium">{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)} className="px-2 sm:px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">
                      +
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-1/4 flex flex-col items-center md:items-end mt-4 md:mt-0">
                  <p className="text-lg sm:text-2xl font-bold text-green-600">₹{item.price * item.quantity}</p>
                  <button onClick={() => handleDelete(item)} className="mt-2 text-red-500 hover:text-red-700 font-semibold">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="w-full lg:w-1/3 p-4 sm:p-6 bg-green-50 flex flex-col justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-base sm:text-lg">Subtotal</span>
              <span className="text-base sm:text-lg font-bold">₹{subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-base sm:text-lg">Tax (10%)</span>
              <span className="text-base sm:text-lg font-bold">₹{tax}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg sm:text-xl font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-all duration-200">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
