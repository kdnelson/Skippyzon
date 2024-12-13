import { useAppDispatch, useAppSelector } from './useBase';
import { v4 as uuidv4 } from 'uuid'
import {
  addOrderAction,
  removeOrderItemAction,
} from './../middleware/actions/orderActions';

export const useOrder = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.order.order);

  const addOrder = cart => {
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
    order,
    addOrder,
    removeOrderItem,
  }
}
