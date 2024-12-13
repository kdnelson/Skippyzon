import {
  addOrderStart,
  addOrderSuccess,
  addOrderError,
  removeOrderItemStart,
  removeOrderItemSuccess,
  removeOrderItemError,
  // emptyOrderStart,
  // emptyOrderSuccess,
  // emptyOrderError
} from '../reducers/orderReducer';
import { emptyCartAction } from './cartActions'

export const addOrderAction = data => dispatch => {
  try {
    dispatch(addOrderStart())

    dispatch(addOrderSuccess({data}))

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
