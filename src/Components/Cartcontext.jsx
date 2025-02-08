import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  // Load saved cart from localStorage on mount.
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
      // Optionally update count if count is meant to be total items.
      const totalCount = savedCart.reduce((acc, item) => acc + item.quantity, 0);
      setCount(totalCount);
    }
  }, []);

  // Persist cart to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart.
  const addtocart = (product) => {
    if (!product) {
      console.log("No product provided");
      return;
    }
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.index === product.index);
      if (existingItem) {
        return prevCart.map((item) =>
          item.index === product.index
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    // Increase the overall count (you may adjust this logic if count has a different meaning)
    setCount((prev) => prev + 1);
  };

  // Update the quantity of a product in the cart.
  // If newQuantity is 0 or less, the item is removed.
  const updateCart = (productIndex, newQuantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.index === productIndex ? { ...item, quantity: newQuantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
    // Optionally, you can recalc count here:
    setCount((prevCount) =>
      cart.reduce((acc, item) => acc + (item.index === productIndex ? newQuantity : item.quantity), 0)
    );
  };

  // Remove a product from the cart.
  const removeFromCart = (productIndex) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.index !== productIndex)
    );
    // Optionally, adjust count if needed:
    const removedItem = cart.find((item) => item.index === productIndex);
    if (removedItem) {
      setCount((prev) => prev - removedItem.quantity);
    }
  };

  // Debug: Log cart changes.
  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addtocart, updateCart, removeFromCart, count }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
