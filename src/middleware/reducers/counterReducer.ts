import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload.value;
    },
  },
});

export const { increment } = counterReducer.actions;
export default counterReducer.reducer;