import React, { createContext, useContext, useEffect, useState } from "react";

// Create the CartContext
const CartContext = createContext();
export function useCart() {
  return useContext(CartContext);
}

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const getInitialCartState = () => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
  };
  // Define the initial cart state
  const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   getInitialCartState();
  // }, []); // Run only once on component mount

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);
  // Add an item to the cart
  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  // setCartItems([...cartItems, item]);

  // Remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const reduceItemToCart = (itemId) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === itemId.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
            }
          : cartItem
      )
    );
  };
  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };
  // const getItem = (itemId) => {
  //   return cartItems.filter((item) => item.id === 3);
  //   // return cartItems.find((item) => item.id === itemId);
  // };
  // Create the context value object
  const contextValue = {
    cartItems,
    addItemToCart,
    reduceItemToCart,
    removeItemFromCart,
    clearCart,
  };

  // Provide the context value to the children components
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
