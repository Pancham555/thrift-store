// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },
    reduceItemToCart: (state, action) => {
      const itemId = action.payload;
      const item = state.find((cartItem) => cartItem.id === itemId.id);

      if (item) {
        item.quantity = item.quantity > 1 ? item.quantity - 1 : 1;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addItemToCart, reduceItemToCart, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
