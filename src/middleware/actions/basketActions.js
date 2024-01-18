import { BasketService } from './../../services/basketService';
import {
  ADD_BASKET_ITEM_START, 
  ADD_BASKET_ITEM_SUCCESS,
  ADD_BASKET_ITEM_ERROR,
  INCREMENT_BASKET_ITEM_START, 
  INCREMENT_BASKET_ITEM_SUCCESS,
  INCREMENT_BASKET_ITEM_ERROR,
  REMOVE_BASKET_ITEM_START, 
  REMOVE_BASKET_ITEM_SUCCESS,
  REMOVE_BASKET_ITEM_ERROR,
  DECREMENT_BASKET_ITEM_START, 
  DECREMENT_BASKET_ITEM_SUCCESS,
  DECREMENT_BASKET_ITEM_ERROR,
  EMPTY_BASKET_START,
  EMPTY_BASKET_SUCCESS,
  EMPTY_BASKET_ERROR
} from './actionTypes';

const basketService = BasketService();

export const addBasketItemStart = () => ({
  type: ADD_BASKET_ITEM_START,
});

export const addBasketItemSuccess = data => ({
  type: ADD_BASKET_ITEM_SUCCESS,
  payload: data
});

export const addBasketItemError = errorMessage => ({
  type: ADD_BASKET_ITEM_ERROR,
  payload: errorMessage
});

export const incrementBasketItemStart = () => ({
  type: INCREMENT_BASKET_ITEM_START,
});

export const incrementBasketItemSuccess = id => ({
  type: INCREMENT_BASKET_ITEM_SUCCESS,
  payload: id
});

export const incrementBasketItemError = errorMessage => ({
  type: INCREMENT_BASKET_ITEM_ERROR,
  payload: errorMessage
});

export const removeBasketItemStart = () => ({
  type: REMOVE_BASKET_ITEM_START,
});

export const removeBasketItemSuccess = id => ({
  type: REMOVE_BASKET_ITEM_SUCCESS,
  payload: id
});

export const removeBasketItemError = errorMessage => ({
  type: REMOVE_BASKET_ITEM_ERROR,
  payload: errorMessage
});

export const decrementBasketItemStart = () => ({
  type: DECREMENT_BASKET_ITEM_START,
});

export const decrementBasketItemSuccess = id => ({
  type: DECREMENT_BASKET_ITEM_SUCCESS,
  payload: id
});

export const decrementBasketItemError = errorMessage => ({
  type: DECREMENT_BASKET_ITEM_ERROR,
  payload: errorMessage
});

export const emptyBasketStart = () => ({
  type: EMPTY_BASKET_START,
});

export const emptyBasketSuccess = () => ({
  type: EMPTY_BASKET_SUCCESS,
});

export const emptyBasketError = errorMessage => ({
  type: EMPTY_BASKET_ERROR,
  payload: errorMessage
});

export const addBasketItemAction = data => async dispatch => {
  try {
    dispatch(addBasketItemStart());

    dispatch(
      addBasketItemSuccess({
        data: data
      })
    );
  } catch (err) {
    dispatch(addBasketItemError(err));
  }
};

export const incrementBasketItemAction = id => async dispatch => {
  try {
    dispatch(incrementBasketItemStart());

    dispatch(
      incrementBasketItemSuccess({
        id: id
      })
    );
  } catch (err) {
    dispatch(incrementBasketItemError(err));
  }
};

export const removeBasketItemAction = id => async dispatch => {
  try {
    dispatch(removeBasketItemStart());

    dispatch(
      removeBasketItemSuccess({
        id: id
      })
    );
  } catch (err) {
    dispatch(removeBasketItemError(err));
  }
};

export const decrementBasketItemAction = id => async dispatch => {
  try {
    dispatch(decrementBasketItemStart());

    dispatch(
      decrementBasketItemSuccess({
        id: id
      })
    );
  } catch (err) {
    dispatch(decrementBasketItemError(err));
  }
};

export const emptyBasketAction = () => async dispatch => {
  try {
    dispatch(emptyBasketStart());

    dispatch(
      emptyBasketSuccess()
    );
  } catch (err) {
    dispatch(emptyBasketError(err));
  }
};