import {
  getProductsStart,
  getProductsSuccess,
  getProductsError,
  setProductQueryStart,
  setProductQuerySuccess,
  setProductQueryError,
} from '../reducers/productReducer';

export const getProductsAction = (data) => dispatch => {
  try {
    dispatch(getProductsStart())

    dispatch(getProductsSuccess(data))
  } catch (err) {
    dispatch(getProductsError(err))
  }
}

export const setProductQueryAction = (data) => dispatch => {
  try {
    dispatch(setProductQueryStart())

    dispatch(setProductQuerySuccess(data))
  } catch (err) {
    dispatch(setProductQueryError(err))
  }
}
