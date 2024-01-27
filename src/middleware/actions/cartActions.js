import { CartService } from './../../services/cartService';
import {
  ADD_CART_ITEM_START, 
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_ERROR,
  INCREMENT_CART_ITEM_START, 
  INCREMENT_CART_ITEM_SUCCESS,
  INCREMENT_CART_ITEM_ERROR,
  REMOVE_CART_ITEM_START, 
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_ERROR,
  DECREMENT_CART_ITEM_START, 
  DECREMENT_CART_ITEM_SUCCESS,
  DECREMENT_CART_ITEM_ERROR,
  EMPTY_CART_START,
  EMPTY_CART_SUCCESS,
  EMPTY_CART_ERROR
} from './actionTypes';

const cartService = CartService();

export const addCartItemStart = () => ({
  type: ADD_CART_ITEM_START,
});

export const addCartItemSuccess = data => ({
  type: ADD_CART_ITEM_SUCCESS,
  payload: data
});

export const addCartItemError = errorMessage => ({
  type: ADD_CART_ITEM_ERROR,
  payload: errorMessage
});

export const incrementCartItemStart = () => ({
  type: INCREMENT_CART_ITEM_START,
});

export const incrementCartItemSuccess = id => ({
  type: INCREMENT_CART_ITEM_SUCCESS,
  payload: id
});

export const incrementCartItemError = errorMessage => ({
  type: INCREMENT_CART_ITEM_ERROR,
  payload: errorMessage
});

export const removeCartItemStart = () => ({
  type: REMOVE_CART_ITEM_START,
});

export const removeCartItemSuccess = id => ({
  type: REMOVE_CART_ITEM_SUCCESS,
  payload: id
});

export const removeCartItemError = errorMessage => ({
  type: REMOVE_CART_ITEM_ERROR,
  payload: errorMessage
});

export const decrementCartItemStart = () => ({
  type: DECREMENT_CART_ITEM_START,
});

export const decrementCartItemSuccess = id => ({
  type: DECREMENT_CART_ITEM_SUCCESS,
  payload: id
});

export const decrementCartItemError = errorMessage => ({
  type: DECREMENT_CART_ITEM_ERROR,
  payload: errorMessage
});

export const emptyCartStart = () => ({
  type: EMPTY_CART_START,
});

export const emptyCartSuccess = () => ({
  type: EMPTY_CART_SUCCESS,
});

export const emptyCartError = errorMessage => ({
  type: EMPTY_CART_ERROR,
  payload: errorMessage
});

export const addCartItemAction = data => async dispatch => {
  try {
    dispatch(addCartItemStart());

    dispatch(
      addCartItemSuccess({
        data: data
      })
    );
  } catch (err) {
    dispatch(addCartItemError(err));
  }
};

export const incrementCartItemAction = id => async dispatch => {
  try {
    dispatch(incrementCartItemStart());

    dispatch(
      incrementCartItemSuccess({
        id: id
      })
    );
  } catch (err) {
    dispatch(incrementCartItemError(err));
  }
};

export const removeCartItemAction = id => async dispatch => {
  try {
    dispatch(removeCartItemStart());

    dispatch(
      removeCartItemSuccess({
        id: id
      })
    );
  } catch (err) {
    dispatch(removeCartItemError(err));
  }
};

export const decrementCartItemAction = id => async dispatch => {
  try {
    dispatch(decrementCartItemStart());

    dispatch(
      decrementCartItemSuccess({
        id: id
      })
    );
  } catch (err) {
    dispatch(decrementCartItemError(err));
  }
};

export const emptyCartAction = () => async dispatch => {
  try {
    dispatch(emptyCartStart());

    dispatch(
      emptyCartSuccess()
    );
  } catch (err) {
    dispatch(emptyCartError(err));
  }
};