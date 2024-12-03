import { useAppDispatch, useAppSelector } from './useBase';
import parsefloat from 'parsefloat'
import {
  addToCartAction,
  incrementCartItemAction,
  decrementCartItemAction,
  removeFromCartAction,
} from './../middleware/actions/cartActions';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

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

  const getCartCounter = () => {
    let counter = 0
    cart?.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  const getPaymentAndTaxTotal = cart => {
    let total = 0
    cart?.forEach(item => {
      total += (parsefloat(item.price) * item.quantity)
    })
    return total + (total * 0.03)
  }

  const getCartTotal = cart => {
    let total = 0
    cart?.forEach(item => {
      total += (parsefloat(item.price) * item.quantity)
    })
    return total
  }

  return {
    addToCart,
    incrementCartItemCart,
    decrementCartItemCart,
    removeFromCart,
    getCartCounter,
    getPaymentAndTaxTotal,
    getCartTotal,
  }
}
