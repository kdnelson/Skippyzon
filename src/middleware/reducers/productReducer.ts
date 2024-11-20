import { createSlice } from '@reduxjs/toolkit';
import { Product } from './../../models/product';

const initialState = {
  products: Product[{}],
  productQuery: '',
  isLoading: false,
  errorMessage: ""
};

const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload.data,
      state.isLoading = false,
      state.errorMessage = ""
    },
    getProductsError: (state) => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
    setProductQueryStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    setProductQuerySuccess: (state, action) => {
      state.productQuery = action.payload.data,
      state.isLoading = false,
      state.errorMessage = ""
    },
    setProductQueryError: (state) => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsError,
  setProductQueryStart,
  setProductQuerySuccess,
  setProductQueryError,
} = productReducer.actions;
export default productReducer.reducer;