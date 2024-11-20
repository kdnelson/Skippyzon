import { createSlice } from '@reduxjs/toolkit';
import { Cart } from './../../models/cart'

const initialState = {
  Cart: [],
  isLoading: false,
  errorMessage: ""
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    addToCartSuccess: (state, action) => {
      var cartAddHit = false
      state.Cart.forEach(o => {
        if (o.title === action.payload.data.title) {
          cartAddHit = true
          o.quantity++
        }
      })

      if (cartAddHit === false) {
        state.Cart = [state.Cart, action.payload.data],
        state.isLoading = false,
        state.errorMessage = ""
      } else {
        state.Cart = [...state.Cart],
        state.isLoading = false,
        state.errorMessage = ""
      }
    },
    addToCartError: (state) => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
    incrementCartItemStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    incrementCartItemSuccess: (state, action) => {
      var foundCartItemOnInc = false
      state.Cart.forEach(o => {
        if (o.id === action.payload.id) {
          foundCartItemOnInc = true
          if(o.quantity < 9) { o.quantity++ }
        }
      })

      if (foundCartItemOnInc === true) {
        state.Cart = [...state.Cart],
        state.isLoading = false,
        state.errorMessage = ""
      } else {
        state.isLoading = false,
        state.errorMessage = ""
      }
    },
    incrementCartItemError: (state) => {
      state.isLoading = false,
      state.errorMessage = ""
    },
    decrementCartItemStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    decrementCartItemSuccess: (state, action) => {
      var foundCartItemOnDec = false
      var removeCartItemOnDec = false
      state.Cart.forEach(o => {
        if (o.id === action.payload.id) {
          foundCartItemOnDec = true
          o.quantity--
          if (o.quantity === 0) {
            removeCartItemOnDec = true
          }
        }
      })

      if (foundCartItemOnDec === true) {
        if (removeCartItemOnDec === true) {
          const removeIndex = state.Cart.findIndex(
            o => o.id === action.payload.id
          )
          const newDecrementedCart = [...state.Cart]

          if (removeIndex >= 0) {
            newDecrementedCart.splice(removeIndex, 1)
          } else {
            console.warn(
              `Product (id: ${action.id}) not found in cart!`
            )
          }

          state.Cart = newDecrementedCart,
          state.isLoading = false,
          state.errorMessage = ""
        }

        state.Cart = [...state.Cart],
        state.isLoading = false,
        state.errorMessage = ""
      } else {
        state.isLoading = false,
        state.errorMessage = ""
      }
    },
    decrementCartItemError: (state) => {
      state.isLoading = false,
      state.errorMessage = ""
    },
    removeFromCartStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    removeFromCartSuccess: (state, action) => {
     var removeCartItem = false
      state.Cart.forEach(o => {
        if (o.id === action.payload.id) {
          removeCartItem = true
        }
      })

      if (removeCartItem === true) {
        const removeIndex = state.Cart.findIndex(
          o => o.id === action.payload.id
        )
        const newCartOnItemRemoval = [...state.Cart]

        if (removeIndex >= 0) {
          newCartOnItemRemoval.splice(removeIndex, 1)
        } else {
          console.warn(
            `Product (id: ${action.id}) not found in cart!`
          )
        }
        state.Cart = newCartOnItemRemoval,
        state.isLoading = false,
        state.errorMessage = ""
      } else {
        state.Cart = [...state.Cart],
        state.isLoading = false,
        state.errorMessage = ""
      }
    },
    removeFromCartError: (state) => {
      state.isLoading = false,
      state.errorMessage = ""
    },
  },
});

export const {
  addToCartStart,
  addToCartSuccess,
  addToCartError,
  incrementCartItemStart,
  incrementCartItemSuccess,
  incrementCartItemError,
  decrementCartItemStart,
  decrementCartItemSuccess,
  decrementCartItemError,
  removeFromCartStart,
  removeFromCartSuccess,
  removeFromCartError
} = cartReducer.actions;
export default cartReducer.reducer;