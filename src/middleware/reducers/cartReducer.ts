import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  errorMessage: ""
};

const cartReducer = createSlice({
  name: 'cart',
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
} = cartReducer.actions;
export default cartReducer.reducer;