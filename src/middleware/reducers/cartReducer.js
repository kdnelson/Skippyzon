import {
  ADD_CART_ITEM_START,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_ERROR,
  INCREMENT_CART_ITEM_START,
  INCREMENT_CART_ITEM_SUCCESS,
  INCREMENT_CART_ITEM_ERROR,
  REMOVE_CART_ITEM_START,
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_ERROR,
  DECREMENT_CART_ITEM_START,
  DECREMENT_CART_ITEM_SUCCESS,
  DECREMENT_CART_ITEM_ERROR,
  EMPTY_CART_START,
  EMPTY_CART_SUCCESS,
  EMPTY_CART_ERROR
} from '../actions/actionTypes'

export const INITIAL_STATE = {
  cart: [],
  isLoading: false,
  errorMessage: null
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    case ADD_CART_ITEM_SUCCESS:
      var cartAddHit = false
      state.cart.forEach(o => {
        if (o.title === action.payload.data.title) {
          cartAddHit = true
          o.quantity++
        }
      })
      if (cartAddHit === false) {
        return {
          ...state,
          cart: [...state.cart, action.payload.data],
          isLoading: false,
          errorMessage: null
        }
      } else {
        return {
          ...state,
          cart: [...state.cart],
          isLoading: false,
          errorMessage: null
        }
      }
    case ADD_CART_ITEM_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false
      }
    case INCREMENT_CART_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    case INCREMENT_CART_ITEM_SUCCESS:
      var foundCartItemOnInc = false
      state.cart.forEach(o => {
        if (o.id === action.payload.id) {
          foundCartItemOnInc = true
          o.quantity++
        }
      })
      if (foundCartItemOnInc === true) {
        return {
          ...state,
          cart: [...state.cart],
          isLoading: false,
          errorMessage: null
        }
      } else {
        return {
          ...state,
          isLoading: false,
          errorMessage: null
        }
      }
    case INCREMENT_CART_ITEM_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false
      }
    case REMOVE_CART_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    case REMOVE_CART_ITEM_SUCCESS:
      var removeCartItem = false
      state.cart.forEach(o => {
        if (o.id === action.payload.id) {
          removeCartItem = true
        }
      })
      if (removeCartItem === true) {
        const removeIndex = state.cart.findIndex(
          o => o.id === action.payload.id
        )
        const newCartOnItemRemoval = [...state.cart]

        if (removeIndex >= 0) {
          newCartOnItemRemoval.splice(removeIndex, 1)
        } else {
          console.warn(
            `Product (id: ${action.id}) not found in cart!`
          )
        }
        return {
          ...state,
          cart: newCartOnItemRemoval,
          isLoading: false,
          errorMessage: null
        }
      } else {
        return {
          ...state,
          cart: [...state.cart],
          isLoading: false,
          errorMessage: null
        }
      }
    case REMOVE_CART_ITEM_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false
      }
    case DECREMENT_CART_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    case DECREMENT_CART_ITEM_SUCCESS:
      var foundCartItemOnDec = false
      var removeCartItemOnDec = false
      state.cart.forEach(o => {
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
          const removeIndex = state.cart.findIndex(
            o => o.id === action.payload.id
          )
          const newDecrementedCart = [...state.cart]

          if (removeIndex >= 0) {
            newDecrementedCart.splice(removeIndex, 1)
          } else {
            console.warn(
              `Product (id: ${action.id}) not found in cart!`
            )
          }
          return {
            ...state,
            cart: newDecrementedCart,
            isLoading: false,
            errorMessage: null
          }
        }
        return {
          ...state,
          cart: [...state.cart],
          isLoading: false,
          errorMessage: null
        }
      } else {
        return {
          ...state,
          isLoading: false,
          errorMessage: null
        }
      }
    case DECREMENT_CART_ITEM_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false
      }
    case EMPTY_CART_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    case EMPTY_CART_SUCCESS:
      return {
        ...state,
        cart: [],
        isLoading: false,
        errorMessage: null
      }
    case EMPTY_CART_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false
      }
    default:
      return state
  }
}
