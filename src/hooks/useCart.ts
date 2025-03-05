import { useAppDispatch, useAppSelector } from './useBase';
import parsefloat from 'parsefloat'
import { v4 as uuidv4 } from 'uuid'
import {
  addCartItemAction,
  incrementCartItemAction,
  decrementCartItemAction,
  removeCartItemAction,
} from './../middleware/actions/cartActions';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const addCartItem = async (serialNumber, title, image, price) => {
    if(getCartCounter() >= 99) {
      return;
    }

    const data = {
      id: uuidv4(),
      serialNumber,
      title,
      image,
      price,
      quantity: 1
    }
    return dispatch(addCartItemAction(data))
  }

  const incrementCartItem = id => {
    return dispatch(incrementCartItemAction(id))
  }

  const decrementCartItem = id => {
    return dispatch(decrementCartItemAction(id))
  }

  const removeCartItem = id => {
    return dispatch(removeCartItemAction(id))
  }

  const getCartCounter = () => {
    let counter = 0
    cart?.map(item => {
      counter += item.quantity
    })
    return counter
  }

  const getPaymentAndTaxTotal = cart => {
    let total = 0
    cart?.map(item => {
      total += (parsefloat(item.price) * item.quantity)
    })
    return total + (total * 0.03)
  }

  const getCartTotal = cart => {
    let total = 0
    cart?.map(item => {
      total += (parsefloat(item.price) * item.quantity)
    })
    return total
  }

  return {
    cart, 
    addCartItem,
    incrementCartItem,
    decrementCartItem,
    removeCartItem,
    getCartCounter,
    getPaymentAndTaxTotal,
    getCartTotal,
  }
}
