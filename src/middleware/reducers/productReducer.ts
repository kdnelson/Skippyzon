import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  errorMessage: ""
};

const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incrementStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    incrementSuccess: (state, action) => {
      state.isLoading = false,
      state.errorMessage = ""
    },
    incrementError: (state) => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
  },
});

export const {
  incrementStart,
  incrementSuccess,
  incrementError
} = productReducer.actions;
export default productReducer.reducer;