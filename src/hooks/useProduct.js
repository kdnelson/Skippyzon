import { useDispatch, useSelector } from 'react-redux'
import { getProductQuery, getProducts } from '../middleware/selectors/productSelector'
import { setProductQueryAction, getProductsAction } from '../middleware/actions/productActions'

export const useProduct = () => {
  const dispatch = useDispatch()
  const productQuery = useSelector(getProductQuery)
  const products = useSelector(getProducts)

  const setProductQuery = query => {
    return dispatch(setProductQueryAction(query))
  }

  const getAllProducts = async () => {
    return dispatch(getProductsAction())
  }

  return {
    productQuery,
    products,
    setProductQuery,
    getAllProducts
  }
}
