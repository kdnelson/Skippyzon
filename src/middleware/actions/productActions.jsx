import {
  getProductsStart,
  getProductsSuccess,
  getProductsError,
  setProductQueryStart,
  setProductQuerySuccess,
  setProductQueryError,
} from '../reducers/productReducer';
import { ProductService } from './../../services/productService'

const productService = ProductService()

export const getProductsAction = () => async dispatch => {
  try {
    dispatch(getProductsStart())
    const response = await productService.getServiceProducts()

    dispatch(
      getProductsSuccess({
        data: response
      })
    )

    return response
  } catch (err) {
    dispatch(getProductsError(err))
  }
}

export const setProductQueryAction = (data) => dispatch => {
  try {
    dispatch(setProductQueryStart())
    dispatch(setProductQuerySuccess({data}))
  } catch (err) {
    dispatch(setProductQueryError(err))
  }
}
