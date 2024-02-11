import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../middleware/selectors/productSelector'
import { getProductsAction } from '../middleware/actions/productActions'

export const useProduct = () => {
  const dispatch = useDispatch()
  const products = useSelector(getProducts)

  const getAllProducts = async () => {
    return dispatch(getProductsAction())
  }

  return {
    products,
    getAllProducts
  }
}
