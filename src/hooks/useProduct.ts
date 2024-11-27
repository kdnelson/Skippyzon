import { useAppDispatch } from './useBase';
import {
  getProductsAction,
  setProductQueryAction,
} from './../middleware/actions/productActions';

export const useProduct = () => {
  const dispatch = useAppDispatch();

  const getProducts = (value) => {
    const data = {
      value: value
    }
    return dispatch(getProductsAction(data))
  }

  const setProductQuery = (value) => {
    const data = {
      value: value
    }
    return dispatch(setProductQueryAction(data))
  }

  return {
    getProducts,
    setProductQuery,
  }
}
