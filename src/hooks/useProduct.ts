import { useAppDispatch, useAppSelector } from './useBase';
import {
  getProductsAction,
  setProductQueryAction,
} from './../middleware/actions/productActions';

export const useProduct = () => {
  const dispatch = useAppDispatch();
  const productQuery = useAppSelector((state) => state.product.productQuery);
  const products = useAppSelector((state) => state.product.products);

  const setProductQuery = query => {
    return dispatch(setProductQueryAction(query))
  }

  const getProducts = async () => {
    return dispatch(getProductsAction())
  }

  return {
    productQuery,
    products,
    getProducts,
    setProductQuery,
  }
}
