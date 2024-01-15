import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from '../actions/actionTypes';

export const INITIAL_STATE = {
  products: [],
  isLoading: false,
  errorMessage: null
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
      };
    default:
      return state;
  }
};
