import {
  SET_PRODUCTQUERY_START,
  SET_PRODUCTQUERY_SUCCESS,
  SET_PRODUCTQUERY_ERROR,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from '../actions/actionTypes'

export const INITIAL_STATE = {
  productQuery: '',
  products: [],
  isLoading: false,
  errorMessage: null
}

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTQUERY_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    case SET_PRODUCTQUERY_SUCCESS:
      return {
        ...state,
        productQuery: action.payload.data,
        isLoading: false,
        errorMessage: null
      }
    case SET_PRODUCTQUERY_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'TODO'
      }
    case GET_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
        isLoading: false,
        errorMessage: null
      }
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'TODO'
      }
    default:
      return state
  }
}
