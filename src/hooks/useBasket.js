import parseint from 'parseint'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getBasket } from '../middleware/selectors/basketSelector'
import {
  addBasketItemAction,
  incrementBasketItemAction,
  decrementBasketItemAction,
} from '../middleware/actions/basketActions'

export const useBasket = () => {
  const dispatch = useDispatch();
  const basket = useSelector(getBasket);

  const addBasketItem = async (serialNumber, title, image, price, rating) => {
    const data = {
      id: uuidv4(),
      serialNumber: serialNumber,
      title: title,
      image: image,
      price: price,
      rating: rating,
      quantity: 1,
    }
    return dispatch(addBasketItemAction(data));
  }

  const incrementBasketItem = async id => {
    return dispatch(incrementBasketItemAction(id));
  }

  const decrementBasketItem = async id => {
    return dispatch(decrementBasketItemAction(id));
  } 

  const getBasketCounter = () => {
    let counter = 0;
    basket.forEach(item => {
      counter += item.quantity
    });
    return counter;
  }

  const getPaymentAndTaxTotal = (basket) => {
    let total = 0;
    basket.forEach(item => {
      total += (parseint(item.price)*item.quantity)
    });
    return total + (total * .07);
  }

  const getBasketTotal = (basket) => {
    let total = 0;
    basket.forEach(item => {
      total += (parseint(item.price)*item.quantity)
    });
    return total;
  }

  return {
    basket,
    addBasketItem,
    incrementBasketItem,
    decrementBasketItem,
    getBasketCounter,
    getPaymentAndTaxTotal,
    getBasketTotal
  };
};