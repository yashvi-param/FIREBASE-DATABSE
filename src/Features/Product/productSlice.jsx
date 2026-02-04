import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare(product) {
        return {
          payload: {
            id: nanoid(),
            ...product,
          },
        };
      },
    },

    deleteProduct(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },

    updateProduct(state, action) {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.name = action.payload.name;
        product.price = action.payload.price;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
