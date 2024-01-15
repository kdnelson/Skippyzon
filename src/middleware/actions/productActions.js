import { ProductService } from './../../services/productService';
import {
  GET_PRODUCTS_START, 
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from './actionTypes';

const productService = ProductService();

export const getProductsStart = () => ({
  type: GET_PRODUCTS_START,
});

export const getProductsSuccess = (data) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: data
});

export const getProductsError = (errorMessage) => ({
  type: GET_PRODUCTS_ERROR,
  payload: errorMessage
});

export const getProductsAction = () => async (dispatch) => {
  try {
    dispatch(getProductsStart());

    const response = await productService.getProducts();

    dispatch(
      getProductsSuccess({
        data: response
      })
    );

    return response;
  } catch (err) {
    dispatch(getProductsError(err));
  }
};