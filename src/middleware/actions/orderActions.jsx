import {
  addOrderStart,
  addOrderSuccess,
  addOrderError,
  removeOrderStart,
  removeOrderSuccess,
  removeOrderError,
  emptyOrderStart,
  emptyOrderSuccess,
  emptyOrderError
} from '../reducers/orderReducer';

export const addOrderAction = (data) => dispatch => {
  try {
    dispatch(addOrderStart())

    dispatch(addOrderSuccess(data))
  } catch (err) {
    dispatch(addOrderError(err))
  }
}

export const removeOrderAction = (data) => dispatch => {
  try {
    dispatch(removeOrderStart())

    dispatch(removeOrderSuccess(data))
  } catch (err) {
    dispatch(removeOrderError(err))
  }
}

export const emptyOrderAction = (data) => dispatch => {
  try {
    dispatch(emptyOrderStart())

    dispatch(emptyOrderSuccess(data))
  } catch (err) {
    dispatch(emptyOrderError(err))
  }
}
