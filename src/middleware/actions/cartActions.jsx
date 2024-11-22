import {
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
  removeFromCartError,
} from '../reducers/cartReducer';

export const addToCartAction = (data) => dispatch => {
  try {
    dispatch(addToCartStart())

    dispatch(addToCartSuccess(data))
  } catch (err) {
    dispatch(addToCartError(err))
  }
}

export const incrementCartItemAction = (data) => dispatch => {
  try {
    dispatch(incrementCartItemStart())

    dispatch(incrementCartItemSuccess(data))
  } catch (err) {
    dispatch(incrementCartItemError(err))
  }
}

export const decrementCartItemAction = (data) => dispatch => {
  try {
    dispatch(decrementCartItemStart())

    dispatch(decrementCartItemSuccess(data))
  } catch (err) {
    dispatch(decrementCartItemError(err))
  }
}

export const removeFromCartAction = (data) => dispatch => {
  try {
    dispatch(removeFromCartStart())

    dispatch(removeFromCartSuccess(data))
  } catch (err) {
    dispatch(removeFromCartError(err))
  }
}
