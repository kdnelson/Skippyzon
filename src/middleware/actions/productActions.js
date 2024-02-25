import { ProductService } from './../../services'
import {
  SET_PRODUCTQUERY_START,
  SET_PRODUCTQUERY_SUCCESS,
  SET_PRODUCTQUERY_ERROR,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from './actionTypes'

const productService = ProductService()

export const setProductQueryStart = () => ({
  type: SET_PRODUCTQUERY_START
})

export const setProductQuerySuccess = data => ({
  type: SET_PRODUCTQUERY_SUCCESS,
  payload: data
})

export const setProductQueryError = errorMessage => ({
  type: SET_PRODUCTQUERY_ERROR,
  payload: errorMessage
})

export const setProductQueryAction = data => async dispatch => {
  try {
    dispatch(setProductQueryStart())

    dispatch(
      setProductQuerySuccess({
        data
      })
    )
  } catch (err) {
    dispatch(setProductQueryError(err))
  }
}

export const getProductsStart = () => ({
  type: GET_PRODUCTS_START
})

export const getProductsSuccess = data => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: data
})

export const getProductsError = errorMessage => ({
  type: GET_PRODUCTS_ERROR,
  payload: errorMessage
})

export const getProductsAction = () => async dispatch => {
  try {
    dispatch(getProductsStart())

    const response = await productService.getProducts()

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
