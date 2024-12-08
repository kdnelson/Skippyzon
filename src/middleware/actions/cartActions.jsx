import {
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
  removeCartItemError,
} from '../reducers/cartReducer';

export const addCartItemAction = data => dispatch => {
  try {
    dispatch(addCartItemStart())
    dispatch(addCartItemSuccess({data}))
  } catch (err) {
    dispatch(addCartItemError(err))
  }
}

export const incrementCartItemAction = data => dispatch => {
  try {
    dispatch(incrementCartItemStart())
    dispatch(incrementCartItemSuccess(data))
  } catch (err) {
    dispatch(incrementCartItemError(err))
  }
}

export const decrementCartItemAction = data => dispatch => {
  try {
    dispatch(decrementCartItemStart())
    dispatch(decrementCartItemSuccess(data))
  } catch (err) {
    dispatch(decrementCartItemError(err))
  }
}

export const removeCartItemAction = data => dispatch => {
  try {
    dispatch(removeCartItemStart())
    dispatch(removeCartItemSuccess(data))
  } catch (err) {
    dispatch(removeCartItemError(err))
  }
}
