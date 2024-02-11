import {
  ADD_ORDER_START,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_ERROR,
  REMOVE_ORDER_ITEM_START,
  REMOVE_ORDER_ITEM_SUCCESS,
  REMOVE_ORDER_ITEM_ERROR
} from './actionTypes'
import { emptyCartAction } from './cartActions'

export const addOrderStart = () => ({
  type: ADD_ORDER_START
})

export const addOrderSuccess = data => ({
  type: ADD_ORDER_SUCCESS,
  payload: data
})

export const addOrderError = errorMessage => ({
  type: ADD_ORDER_ERROR,
  payload: errorMessage
})

export const removeOrderItemStart = () => ({
  type: REMOVE_ORDER_ITEM_START
})

export const removeOrderItemSuccess = id => ({
  type: REMOVE_ORDER_ITEM_SUCCESS,
  payload: id
})

export const removeOrderItemError = errorMessage => ({
  type: REMOVE_ORDER_ITEM_ERROR,
  payload: errorMessage
})

export const addOrderAction = data => async dispatch => {
  try {
    dispatch(addOrderStart())

    dispatch(
      addOrderSuccess({
        data
      })
    )

    dispatch(emptyCartAction())
  } catch (err) {
    dispatch(addOrderError(err))
  }
}

export const removeOrderItemAction = id => async dispatch => {
  try {
    dispatch(removeOrderItemStart())

    dispatch(
      removeOrderItemSuccess({
        id
      })
    )
  } catch (err) {
    dispatch(removeOrderItemError(err))
  }
}
