import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Upperbanner from "./Components/Upperbanner";
import Hero from "./Components/Hero";
import ProductDetails from "./Components/ProductDetails"; // Product details page
import { CartProvider } from "./Components/Cartcontext";
import Cart from "./Components/Cart";
import { SortProvider } from "./Components/Sortcontext";

function App() {
  return (
    <CartProvider>
<SortProvider>




    <Router>
      <Navbar />
      <Routes>
        {/* Main page with Upperbanner, Home, and Hero */}
        <Route path="/" element={<> <Upperbanner /> <Hero /></>} />

        {/* Product details page */}
        <Route path="/product/:title" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </SortProvider>
    </CartProvider>
  );
}

export default App;
