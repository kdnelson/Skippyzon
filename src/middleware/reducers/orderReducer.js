import {
  ADD_ORDER_START,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_ERROR,
  REMOVE_ORDER_ITEM_START,
  REMOVE_ORDER_ITEM_SUCCESS,
  REMOVE_ORDER_ITEM_ERROR,
  EMPTY_ORDER_START,
  EMPTY_ORDER_SUCCESS,
  EMPTY_ORDER_ERROR
} from '../actions/actionTypes';

export const INITIAL_STATE = {
  order: [],
  isLoading: false,
  errorMessage: null
};

export const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ORDER_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        order: [...state.order, action.payload.data],
        isLoading: false,
        errorMessage: null,
      }
    case ADD_ORDER_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false,
      };
    case REMOVE_ORDER_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    case REMOVE_ORDER_ITEM_SUCCESS:
      const index = state.order.findIndex(
        o => o.id === action.payload.id
      );
      let newOrder = [...state.order];

      if (index >= 0) {
        newOrder.splice(index, 1);
      } else {
        console.warn(
          `Product (id: ${action.id}) not found in order!`
        )
      }
      return {
        ...state,
        order: newOrder,
        isLoading: false,
        errorMessage: null,
      }
    case REMOVE_ORDER_ITEM_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false,
      };
    case EMPTY_ORDER_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    case EMPTY_ORDER_SUCCESS:
      return {
        ...state,
        order: [],
        isLoading: false,
        errorMessage: null,
      }
    case EMPTY_ORDER_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false,
      };
    default:
      return state;
  }
};
