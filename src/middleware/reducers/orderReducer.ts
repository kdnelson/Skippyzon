import { createSlice } from '@reduxjs/toolkit';
import { Order } from './../../models/order';

const initialState = {
  order: [] as typeof Order[],
  isLoading: false,
  errorMessage: ""
};

const orderReducer = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrderStart: state => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    addOrderSuccess: (state, action) => {
      state.order =  [...state.order, action.payload.data],
      state.isLoading =  false,
      state.errorMessage = ""
    },
    addOrderError: state => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
    removeOrderItemStart: state => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    removeOrderItemSuccess: (state, action) => {
      const index = state.order.findIndex(
        o => o.id === action.payload.id
      )
      const newOrder = [...state.order]

      if (index >= 0) {
        newOrder.splice(index, 1)
      } else {
        console.warn(
          `Product (id: ${action.payload.id}) not found in order!`
        )
      }

      state.order = newOrder,
      state.isLoading = false,
      state.errorMessage = ""
    },
    removeOrderItemError: state => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
    emptyOrderStart: state => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    emptyOrderSuccess: state => {
      state.order = [],
      state.isLoading = false,
      state.errorMessage = ""
    },
    emptyOrderError: state => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
  },
});

export const {
  addOrderStart,
  addOrderSuccess,
  addOrderError,
  removeOrderItemStart,
  removeOrderItemSuccess,
  removeOrderItemError,
  emptyOrderStart,
  emptyOrderSuccess,
  emptyOrderError
} = orderReducer.actions;
export default orderReducer.reducer;