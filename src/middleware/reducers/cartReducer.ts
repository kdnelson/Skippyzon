import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '../../models/cart';

const initialState = {
  cart: [] as typeof Cart[],
  isLoading: false,
  errorMessage: ""
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItemStart: state => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    addCartItemSuccess: (state, action) => {
      var cartAddHit = false
      state.cart?.map(o => {
        if (o.serialNumber === action.payload.data.serialNumber) {
          cartAddHit = true
          o.quantity++
        }
      })

      if (cartAddHit === false) {
        state.cart.push(action.payload.data),
        state.isLoading = false,
        state.errorMessage = ""
      } else {
        state.cart = [...state.cart],
        state.isLoading = false,
        state.errorMessage = ""
      }
    },
    addCartItemError: state => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
    incrementCartItemStart: state => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    incrementCartItemSuccess: (state, action) => {
      var foundCartItemOnInc = false
      state.cart?.map(o => {
        if (o.id === action.payload.id) {
          foundCartItemOnInc = true
          if(o.quantity < 9) { o.quantity++ }
        }
      })

      if (foundCartItemOnInc) {
        state.cart = [...state.cart],
        state.isLoading = false,
        state.errorMessage = ""
      } else {
        state.isLoading = false,
        state.errorMessage = ""
      }
    },
    incrementCartItemError: state => {
      state.isLoading = false,
      state.errorMessage = ""
    },
    decrementCartItemStart: state => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    decrementCartItemSuccess: (state, action) => {
      var foundCartItemOnDec = false
      var removeCartItemOnDec = false
      state.cart?.map(o => {
        if (o.id === action.payload.id) {
          foundCartItemOnDec = true
          o.quantity--
          if (o.quantity === 0) {
            removeCartItemOnDec = true
          }
        }
      })

      if (foundCartItemOnDec) {
        if (removeCartItemOnDec) {
          const removeIndex = state.cart.findIndex(
            o => o.id === action.payload.id
          )
          const newDecrementedCart = [...state.cart]

          if (removeIndex >= 0) {
            newDecrementedCart.splice(removeIndex, 1)
          } else {
            console.warn(
              `Product (id: ${action.payload.id}) not found in cart!`
            )
          }

          state.cart = newDecrementedCart,
          state.isLoading = false,
          state.errorMessage = ""
        }

        state.cart = [...state.cart],
        state.isLoading = false,
        state.errorMessage = ""
      } else {
        state.isLoading = false,
        state.errorMessage = ""
      }
    },
    decrementCartItemError: state => {
      state.isLoading = false,
      state.errorMessage = ""
    },
    removeCartItemStart: state => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    removeCartItemSuccess: (state, action) => {
     var removeCartItem = false
      state.cart?.map(o => {
        if (o.id === action.payload.id) {
          removeCartItem = true
        }
      })

      if (removeCartItem) {
        const removeIndex = state.cart.findIndex(
          o => o.id === action.payload.id
        )
        const newCartOnItemRemoval = [...state.cart]

        if (removeIndex >= 0) {
          newCartOnItemRemoval.splice(removeIndex, 1)
        } else {
          console.warn(
            `Product (id: ${action.payload.id}) not found in cart!`
          )
        }
        state.cart = newCartOnItemRemoval,
        state.isLoading = false,
        state.errorMessage = ""
      } else {
        state.cart = [...state.cart],
        state.isLoading = false,
        state.errorMessage = ""
      }
    },
    removeCartItemError: state => {
      state.isLoading = false,
      state.errorMessage = ""
    },
  },
});

export const {
  addCartItemStart,
  addCartItemSuccess,
  addCartItemError,
  incrementCartItemStart,
  incrementCartItemSuccess,
  incrementCartItemError,
  decrementCartItemStart,
  decrementCartItemSuccess,
  decrementCartItemError,
  removeCartItemStart,
  removeCartItemSuccess,
  removeCartItemError
} = cartReducer.actions;
export default cartReducer.reducer;