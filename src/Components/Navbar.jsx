import { useState, useRef } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "./Cartcontext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { count } = useCart();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);
  const [searchquery, setSearchquery] = useState("");
  const [filteredresults, setFilteredresults] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // For mobile accordion menus
  const [openAccordion, setOpenAccordion] = useState(null);

  // Expand search bar and focus on input
  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 500);
  };

  // Collapse search bar when focus leaves
  const handleCollapse = (e) => {
    if (
      !e.relatedTarget ||
      !e.relatedTarget.classList.contains("searchbarinput")
    ) {
      setIsExpanded(false);
    }
  };

  // Handle search input changes and filter products
  const handlesearchchange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchquery(query);
    const productList = [
      { name: "Kurta Kurtis", category: "Women", path: "/women/kurta-kurtis" },
      { name: "Sarees", category: "Women", path: "/women/sarees" },
      { name: "Lehengas", category: "Women", path: "/women/lehengas" },
      { name: "Dresses", category: "Women", path: "/women/dresses" },
      { name: "Shirts", category: "Men", path: "/men/shirts" },
      { name: "Jeans", category: "Men", path: "/men/jeans" },
      { name: "T-Shirts", category: "Men", path: "/men/tshirts" },
      { name: "Jackets", category: "Kids", path: "/kids/jackets" },
      { name: "Hoodies", category: "Kids", path: "/kids/hoodies" },
    ];
    if (query) {
      const filtered = productList.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setFilteredresults(filtered);
    } else {
      setFilteredresults([]);
      setIsExpanded(false);
    }
  };

  // Toggle mobile accordion sections
  const toggleAccordion = (section) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  return (
    <header>
      {/* Header with flex-wrap so items can flow to new lines on mobile */}
      <div className="navigationbar flex flex-wrap items-center justify-between sticky top-0 m-auto md:h-16 px-4 lg:px-10 bg-white shadow-md z-50">
        {/* Brand Logo */}
        <div className="brandlogo text-3xl lg:text-5xl font-serif flex-shrink-0">
          <b>FASHLY</b>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-6 lg:gap-8 text-sm lg:text-base">
            {/* WOMEN */}
            <li className="nav-item group relative">
              <button className="focus:outline-none">WOMEN</button>
              <div className="dropdownwomen absolute hidden group-hover:block w-full lg:w-[70vw] text-left -left-96 bg-white rounded-lg shadow-md mt-2.5 lg:-left-32">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                  <div>
                    <h3 className="bg-gray-200 p-2">Ethnic Wear</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/women/kurta-kurtis">Kurta Kurtis</a>
                      </li>
                      <li>
                        <a href="/women/sarees">Sarees</a>
                      </li>
                      <li>
                        <a href="/women/lehengas">Lehengas</a>
                      </li>
                      <li>
                        <a href="/women/dupattas">Dupattas</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="bg-gray-200 p-2">Western Wear</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/women/dresses">Dresses</a>
                      </li>
                      <li>
                        <a href="/women/tops">Tops</a>
                      </li>
                      <li>
                        <a href="/women/jeans">Jeans</a>
                      </li>
                      <li>
                        <a href="/women/jumpsuits">Jumpsuits</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="bg-gray-200 p-2">Footwear</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/women/heels">Heels</a>
                      </li>
                      <li>
                        <a href="/women/flats">Flats</a>
                      </li>
                      <li>
                        <a href="/women/sneakers">Sneakers</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="bg-gray-200 p-2">Accessories</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/women/bags">Bags</a>
                      </li>
                      <li>
                        <a href="/women/jewelry">Jewelry</a>
                      </li>
                      <li>
                        <a href="/women/watches">Watches</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* MEN */}
            <li className="nav-item group relative">
              <button className="focus:outline-none">MEN</button>
              <div className="dropdownmen absolute hidden group-hover:block w-full lg:w-[70vw] max-h-[80vh] -left-96 overflow-y-auto text-left bg-white rounded-lg shadow-md mt-2.5 lg:-left-96">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                  <div>
                    <h3 className="bg-gray-200 p-2">Ethnic Wear</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/men/kurtas">Kurtas</a>
                      </li>
                      <li>
                        <a href="/men/sherwanis">Sherwanis</a>
                      </li>
                      <li>
                        <a href="/men/jackets">Jackets</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="bg-gray-200 p-2">Western Wear</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/men/shirts">Shirts</a>
                      </li>
                      <li>
                        <a href="/men/jeans">Jeans</a>
                      </li>
                      <li>
                        <a href="/men/blazers">Blazers</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="bg-gray-200 p-2">Footwear</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/men/formal-shoes">Formal Shoes</a>
                      </li>
                      <li>
                        <a href="/men/casual-shoes">Casual Shoes</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="bg-gray-200 p-2">Accessories</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/men/watches">Watches</a>
                      </li>
                      <li>
                        <a href="/men/wallets">Wallets</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* KIDS */}
            <li className="nav-item group relative">
              <button className="focus:outline-none">KIDS</button>
              <div className="dropdownkids absolute hidden group-hover:block w-full lg:w-[70vw] text-center bg-white rounded-lg shadow-md mt-2.5 left-0 lg:-left-96">
                <div className="grid grid-cols-3 justify-center items-center">
                  <div className="flex flex-col items-center">
                    <h3 className="bg-gray-200 w-[70%] p-2">Boys</h3>
                    <ul className="space-y-2 text-center">
                      <li>
                        <a href="/kids/boys/tshirts">T-Shirts</a>
                      </li>
                      <li>
                        <a href="/kids/boys/shorts">Shorts</a>
                      </li>
                      <li>
                        <a href="/kids/boys/jeans">Jeans</a>
                      </li>
                      <li>
                        <a href="/kids/boys/jackets">Jackets</a>
                      </li>
                      <li>
                        <a href="/kids/boys/sweaters">Sweaters</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="bg-gray-200 w-[70%] p-2">Girls</h3>
                    <ul className="space-y-2 text-center">
                      <li>
                        <a href="/kids/girls/dresses">Dresses</a>
                      </li>
                      <li>
                        <a href="/kids/girls/skirts">Skirts</a>
                      </li>
                      <li>
                        <a href="/kids/girls/tops">Tops</a>
                      </li>
                      <li>
                        <a href="/kids/girls/leggings">Leggings</a>
                      </li>
                      <li>
                        <a href="/kids/girls/cardigans">Cardigans</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="bg-gray-200 w-[70%] p-2">Teens</h3>
                    <ul className="space-y-2 text-center">
                      <li>
                        <a href="/kids/teens/graphic-tees">Graphic Tees</a>
                      </li>
                      <li>
                        <a href="/kids/teens/hoodies">Hoodies</a>
                      </li>
                      <li>
                        <a href="/kids/teens/jeans">Jeans</a>
                      </li>
                      <li>
                        <a href="/kids/teens/joggers">Joggers</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="text-2xl focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Right Side: Search, Cart, Profile */}
        <div className="sidebars flex items-center gap-4">
          {/* Search Bar */}
          <div
            onClick={handleExpand}
            onBlur={handleCollapse}
            className={`searchbar relative flex items-center border rounded-md transition-all duration-300 ${
              isExpanded ? "w-full md:w-64" : "w-12"
            }`}
          >
            <FaSearch className="text-gray-500 mx-2 cursor-pointer" />
            {isExpanded && (
              <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                className="searchbarinput w-full outline-none p-1"
                value={searchquery}
                onChange={handlesearchchange}
              />
            )}
            {/* Filtered Search Results */}
            {filteredresults.length > 0 && isExpanded && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white shadow-md rounded-b-md z-50">
                <ul className="max-h-60 overflow-y-auto">
                  {filteredresults.map((item, index) => (
                    <li key={index} className="p-2 hover:bg-gray-100">
                      <a href={item.path}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="focus:outline-none"
          >
            <div className="cart relative flex items-center">
              🛒 Cart{" "}
              <span className="ml-1 bg-red-500 text-white rounded-full px-2 text-xs">
                {count}
              </span>
            </div>
          </button>

          {/* Profile */}
          <div className="profile cursor-pointer">Profile</div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden  top-16  w-full bg-white shadow-md z-40">
          <ul className="flex flex-col divide-y">
            {/* Mobile WOMEN Menu */}
            <li className="p-4">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleAccordion("women")}
              >
                WOMEN
                <span>{openAccordion === "women" ? "-" : "+"}</span>
              </button>
              {openAccordion === "women" && (
                <div className="pl-4">
                  <h3 className="bg-gray-200 p-2">Ethnic Wear</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/women/kurta-kurtis">Kurta Kurtis</a>
                    </li>
                    <li>
                      <a href="/women/sarees">Sarees</a>
                    </li>
                    <li>
                      <a href="/women/lehengas">Lehengas</a>
                    </li>
                    <li>
                      <a href="/women/dupattas">Dupattas</a>
                    </li>
                  </ul>
                  <h3 className="bg-gray-200 p-2 mt-2">Western Wear</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/women/dresses">Dresses</a>
                    </li>
                    <li>
                      <a href="/women/tops">Tops</a>
                    </li>
                    <li>
                      <a href="/women/jeans">Jeans</a>
                    </li>
                    <li>
                      <a href="/women/jumpsuits">Jumpsuits</a>
                    </li>
                  </ul>
                  <h3 className="bg-gray-200 p-2 mt-2">Footwear</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/women/heels">Heels</a>
                    </li>
                    <li>
                      <a href="/women/flats">Flats</a>
                    </li>
                    <li>
                      <a href="/women/sneakers">Sneakers</a>
                    </li>
                  </ul>
                  <h3 className="bg-gray-200 p-2 mt-2">Accessories</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/women/bags">Bags</a>
                    </li>
                    <li>
                      <a href="/women/jewelry">Jewelry</a>
                    </li>
                    <li>
                      <a href="/women/watches">Watches</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Mobile MEN Menu */}
            <li className="p-4">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleAccordion("men")}
              >
                MEN
                <span>{openAccordion === "men" ? "-" : "+"}</span>
              </button>
              {openAccordion === "men" && (
                <div className="pl-4">
                  <h3 className="bg-gray-200 p-2">Ethnic Wear</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/men/kurtas">Kurtas</a>
                    </li>
                    <li>
                      <a href="/men/sherwanis">Sherwanis</a>
                    </li>
                    <li>
                      <a href="/men/jackets">Jackets</a>
                    </li>
                  </ul>
                  <h3 className="bg-gray-200 p-2 mt-2">Western Wear</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/men/shirts">Shirts</a>
                    </li>
                    <li>
                      <a href="/men/jeans">Jeans</a>
                    </li>
                    <li>
                      <a href="/men/blazers">Blazers</a>
                    </li>
                  </ul>
                  <h3 className="bg-gray-200 p-2 mt-2">Footwear</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/men/formal-shoes">Formal Shoes</a>
                    </li>
                    <li>
                      <a href="/men/casual-shoes">Casual Shoes</a>
                    </li>
                  </ul>
                  <h3 className="bg-gray-200 p-2 mt-2">Accessories</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/men/watches">Watches</a>
                    </li>
                    <li>
                      <a href="/men/wallets">Wallets</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Mobile KIDS Menu */}
            <li className="p-4">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleAccordion("kids")}
              >
                KIDS
                <span>{openAccordion === "kids" ? "-" : "+"}</span>
              </button>
              {openAccordion === "kids" && (
                <div className="pl-4">
                  <div>
                    <h3 className="bg-gray-200 p-2">Boys</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/kids/boys/tshirts">T-Shirts</a>
                      </li>
                      <li>
                        <a href="/kids/boys/shorts">Shorts</a>
                      </li>
                      <li>
                        <a href="/kids/boys/jeans">Jeans</a>
                      </li>
                      <li>
                        <a href="/kids/boys/jackets">Jackets</a>
                      </li>
                      <li>
                        <a href="/kids/boys/sweaters">Sweaters</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h3 className="bg-gray-200 p-2">Girls</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/kids/girls/dresses">Dresses</a>
                      </li>
                      <li>
                        <a href="/kids/girls/skirts">Skirts</a>
                      </li>
                      <li>
                        <a href="/kids/girls/tops">Tops</a>
                      </li>
                      <li>
                        <a href="/kids/girls/leggings">Leggings</a>
                      </li>
                      <li>
                        <a href="/kids/girls/cardigans">Cardigans</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h3 className="bg-gray-200 p-2">Teens</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/kids/teens/graphic-tees">Graphic Tees</a>
                      </li>
                      <li>
                        <a href="/kids/teens/hoodies">Hoodies</a>
                      </li>
                      <li>
                        <a href="/kids/teens/jeans">Jeans</a>
                      </li>
                      <li>
                        <a href="/kids/teens/joggers">Joggers</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
