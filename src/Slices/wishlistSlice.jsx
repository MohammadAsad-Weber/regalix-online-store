import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const isExist = state.find((item) => item.id === action.payload.id);
      if (isExist) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        state.push({ ...action.payload, isWish: true });
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
