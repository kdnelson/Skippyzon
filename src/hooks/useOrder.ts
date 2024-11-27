import { useAppDispatch } from './useBase';
import {
  addOrderAction,
  removeOrderAction,
  emptyOrderAction
} from './../middleware/actions/orderActions';

export const useOrder = () => {
  const dispatch = useAppDispatch();

  const addOrder = (value) => {
    const data = {
      value: value
    }
    return dispatch(addOrderAction(data))
  }

  const removeOrder = (value) => {
    const data = {
      value: value
    }
    return dispatch(removeOrderAction(data))
  }

  const emptyOrder = (value) => {
    const data = {
      value: value
    }
    return dispatch(emptyOrderAction(data))
  }

  return {
    addOrder,
    removeOrder,
    emptyOrder,
  }
}
