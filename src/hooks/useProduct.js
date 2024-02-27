import { useDispatch, useSelector } from 'react-redux'
import { getProductQuerySelector, getProductSelector } from '../middleware/selectors/productSelector'
import { setProductQueryAction, getProductsAction } from '../middleware/actions/productActions'

export const useProduct = () => {
  const dispatch = useDispatch()
  const productQuery = useSelector(getProductQuerySelector)
  const products = useSelector(getProductSelector)

  const setProductQuery = query => {
    return dispatch(setProductQueryAction(query))
  }

  const getProducts = async () => {
    return dispatch(getProductsAction())
  }

  return {
    productQuery,
    products,
    setProductQuery,
    getProducts
  }
}
