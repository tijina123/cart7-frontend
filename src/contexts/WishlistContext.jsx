import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  //const userId = "67bffce8e7dae9e3c14f3c15"; // Replace with actual user ID from authentication

  // Fetch Wishlist Data from Backend
  useEffect(() => {
    const fetchWishlist = async (userId='67bffce8e7dae9e3c14f3c15') => {
      try {
        const response = await axios.get(`http://localhost:3000/wishlist/${userId}`);
        setWishlist(response.data.wishlist);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, []);

  // Add to Wishlist
  const handleAddToWishlist = async (userId,productId,quantity) => {
    try {
      const response = await axios.post("http://localhost:3000/wishlist", {
        userId,
        productId,
        quantity
      });

      setWishlist(response.data.wishlist);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  // Remove from Wishlist
  const handleRemoveFromWishlist = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/wishlist/${productId}`, {
        data: { userId : '67bffce8e7dae9e3c14f3c15' },
      });

      if (response.status === 200) {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== productId));
      }
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, handleAddToWishlist, handleRemoveFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
