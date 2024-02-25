import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { getOrders } from '../middleware/selectors/orderSelector'
import { addOrderAction, removeOrderItemAction } from '../middleware/actions/orderActions'

export const useOrder = () => {
  const dispatch = useDispatch()
  const orders = useSelector(getOrders)

  const addOrder = async cart => {
    const data = {
      id: uuidv4(),
      order: cart
    }
    return dispatch(addOrderAction(data))
  }

  const removeOrderItem = async id => {
    return dispatch(removeOrderItemAction(id))
  }

  return {
    orders,
    addOrder,
    removeOrderItem
  }
}
