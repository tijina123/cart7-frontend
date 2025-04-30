import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; // Update with your backend URL

export const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/product");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchCart = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cart`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return { cartItems: [], totalQuantity: 0, totalPrice: 0 };
  }
};

export const updateCart = async (cartItems) => {
  try {
    await axios.post(`${API_BASE_URL}/cart`, { cartItems });
  } catch (error) {
    console.error("Error updating cart:", error);
  }
};


// ******************************************************************
// Fetch wishlist items from backend
export const fetchWishlist = async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/wishlist/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      return [];
    }
  };
  
  // Add to wishlist
  export const addToWishlist = async (userId, productId, quantity) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/wishlist`, {
        userId,
        productId,
        quantity,
      });
      return response.data;
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      return null;
    }
  };
  
  // Remove from wishlist
  export const removeFromWishlist = async (userId, productId) => {
    try {
      await axios.delete(`${API_BASE_URL}/wishlist/${userId}/${productId}`);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };