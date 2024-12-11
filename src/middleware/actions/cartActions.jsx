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

export const incrementCartItemAction = id => dispatch => {
  try {
    dispatch(incrementCartItemStart())
    dispatch(incrementCartItemSuccess({id}))
  } catch (err) {
    dispatch(incrementCartItemError(err))
  }
}

export const decrementCartItemAction = id => dispatch => {
  try {
    dispatch(decrementCartItemStart())
    dispatch(decrementCartItemSuccess({id}))
  } catch (err) {
    dispatch(decrementCartItemError(err))
  }
}

export const removeCartItemAction = id => dispatch => {
  try {
    dispatch(removeCartItemStart())
    dispatch(removeCartItemSuccess({id}))
  } catch (err) {
    dispatch(removeCartItemError(err))
  }
}
