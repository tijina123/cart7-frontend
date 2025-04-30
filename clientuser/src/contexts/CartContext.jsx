import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const userId = "67bffce8e7dae9e3c14f3c15"; // Replace with actual user ID from authentication

  // Fetch Cart Data from Backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cart/${userId}`);
        setCart(response.data.cart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  // Add to Cart  to service
  const handleAddToCart = async (productId, quantity) => {
    try {
     

    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Remove from Cart
  const handleRemove = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/cart/${productId}`, {
        data: { userId },
      });

      if (response.status === 200) {
        setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Update Quantity in Cart
  const handleQuantityChange = async (change, quantity, productId) => {
    const newQuantity = quantity + change;
    if (newQuantity < 1) return; // Prevent quantity below 1

    try {
      const response = await axios.put(`http://localhost:3000/cart/${productId}`, {
        userId,
        quantity: newQuantity,
      });

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.productId === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  // Clear Cart
  const clearCart = async () => {
    try {
      await axios.delete(`http://localhost:3000/cart/${userId}`);
      setCart([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, handleRemove, handleQuantityChange, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
