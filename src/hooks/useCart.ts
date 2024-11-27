import { useAppDispatch } from './useBase';
import {
  addToCartAction,
  incrementCartItemAction,
  decrementCartItemAction,
  removeFromCartAction,
} from './../middleware/actions/cartActions';

export const useCart = () => {
  const dispatch = useAppDispatch();

  const addToCart = (value) => {
    const data = {
      value: value
    }
    return dispatch(addToCartAction(data))
  }

  const incrementCartItemCart = (value) => {
    const data = {
      value: value
    }
    return dispatch(incrementCartItemAction(data))
  }

  const decrementCartItemCart = (value) => {
    const data = {
      value: value
    }
    return dispatch(decrementCartItemAction(data))
  }

  const removeFromCart = (value) => {
    const data = {
      value: value
    }
    return dispatch(removeFromCartAction(data))
  }

  return {
    addToCart,
    incrementCartItemCart,
    decrementCartItemCart,
    removeFromCart,
  }
}
