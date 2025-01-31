import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.find((item) => item.id === action.payload.id);
      if (!isExist) {
        state.push({ ...action.payload, quantity: 1 });
        alert("Item Added to the Cart")
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity++ };
        } else {
          return item;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity-- };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
