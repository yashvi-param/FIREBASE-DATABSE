import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/Product/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
