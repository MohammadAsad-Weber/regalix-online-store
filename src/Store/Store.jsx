import { configureStore } from "@reduxjs/toolkit";

// Slices
import wishlistReducers from "../Slices/wishlistSlice";
import feedReducers from "../Slices/feedSlice";
import cartReducers from "../Slices/cartSlice";

export const store = configureStore({
  reducer: {
    feed: feedReducers,
    cart: cartReducers,
    wishlist: wishlistReducers,
  },
});
