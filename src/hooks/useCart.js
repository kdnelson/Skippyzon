import parsefloat from 'parsefloat'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getCart } from '../middleware/selectors/cartSelector'
import {
  addCartItemAction,
  incrementCartItemAction,
  removeCartItemAction,
  decrementCartItemAction,
} from '../middleware/actions/cartActions'

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  const addCartItem = async (serialNumber, title, image, price, rating) => {
    const data = {
      id: uuidv4(),
      serialNumber: serialNumber,
      title: title,
      image: image,
      price: price,
      rating: rating,
      quantity: 1,
    }
    return dispatch(addCartItemAction(data));
  }

  const incrementCartItem = async id => {
    return dispatch(incrementCartItemAction(id));
  }

  const removeCartItem = async id => {
    return dispatch(removeCartItemAction(id));
  }

  const decrementCartItem = async id => {
    return dispatch(decrementCartItemAction(id));
  } 

  const getCartCounter = () => {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    });
    return counter;
  }

  const getPaymentAndTaxTotal = (cart) => {
    let total = 0;
    cart.forEach(item => {
      total += (parsefloat(item.price)*item.quantity)
    });
    return total + (total * .03);
  }

  const getCartTotal = (cart) => {
    let total = 0;
    cart.forEach(item => {
      total += (parsefloat(item.price)*item.quantity)
    });
    return total;
  }

  return {
    cart,
    addCartItem,
    incrementCartItem,
    removeCartItem,
    decrementCartItem,
    getCartCounter,
    getPaymentAndTaxTotal,
    getCartTotal
  };
};