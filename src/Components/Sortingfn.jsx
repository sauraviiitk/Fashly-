export const sortedproducts = (products, sortoption) => {
  let sorted = [...products]; // Create a shallow copy of products to avoid direct mutation

  switch (sortoption) {
    case "price1":
      // Sort by price in ascending order
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price2":
      // Sort by price in descending order
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "Ratings":
      // If you decide to sort by rating, you can add a case for it (assuming products have ratings)
      sorted.sort((a, b) => b.rating - a.rating); // Assuming there's a 'rating' field
      break;
    case "New Arrival":
      // You can sort by date if products have a date field, e.g. `dateAdded`
      sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); // Sorting by recent arrival (assuming `dateAdded` exists)
      break;
    default:
      return products; // If no valid sort option, return original products
  }

  return sorted;
};
