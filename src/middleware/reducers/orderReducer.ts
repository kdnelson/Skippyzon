import { createSlice } from '@reduxjs/toolkit';
import { Order } from './../../models/order'

const initialState = {
  Order: new Order[{}],
  isLoading: false,
  errorMessage: ""
};

const orderReducer = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrderStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    addOrderSuccess: (state, action) => {
      state.Order = [...state.Order, action.payload.data],
      state.isLoading =  false,
      state.errorMessage = ""
    },
    addOrderError: (state) => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
    removeOrderStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    removeOrderSuccess: (state, action) => {
      const index = state.Order.findIndex(
        o => o.id === action.payload.id
      )
      const newOrder = [...state.Order]

      if (index >= 0) {
        newOrder.splice(index, 1)
      } else {
        console.warn(
          `Product (id: ${action.payload.id}) not found in order!`
        )
      }

      state.Order = newOrder,
      state.isLoading = false,
      state.errorMessage = ""
    },
    removeOrderError: (state) => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
    emptyOrderStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    emptyOrderSuccess: (state) => {
      state.Order = [],
      state.isLoading = false,
      state.errorMessage = ""
    },
    emptyOrderError: (state) => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
  },
});

export const {
  addOrderStart,
  addOrderSuccess,
  addOrderError,
  removeOrderStart,
  removeOrderSuccess,
  removeOrderError,
  emptyOrderStart,
  emptyOrderSuccess,
  emptyOrderError
} = orderReducer.actions;
export default orderReducer.reducer;