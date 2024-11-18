import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  isLoading: false,
  errorMessage: ""
};

const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    incrementSuccess: (state, action) => {
      state.value += action.payload.value;
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
} = counterReducer.actions;
export default counterReducer.reducer;