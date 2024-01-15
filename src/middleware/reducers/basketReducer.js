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
} from '../actions/actionTypes';

export const INITIAL_STATE = {
  basket: [],
  isLoading: false,
  errorMessage: null
};

export const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BASKET_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    case ADD_BASKET_ITEM_SUCCESS:
      var cartAddHit = false;
      state.basket.forEach(o => {
        if(o.title === action.payload.data.title) {
          cartAddHit = true;
          o.quantity++;
        }
      });
      if (cartAddHit === false) {
        return {
          ...state,
          basket: [...state.basket, action.payload.data],
          isLoading: false,
          errorMessage: null,
        }
      } else {
        return {
          ...state,
          basket: [...state.basket],
          isLoading: false,
          errorMessage: null,
        }
      }
    case ADD_BASKET_ITEM_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false,
      };
    case INCREMENT_BASKET_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    case INCREMENT_BASKET_ITEM_SUCCESS:
      var incrementCartHit = false;
      state.basket.forEach(o => {
        if(o.id === action.payload.id) {
          incrementCartHit = true;
          o.quantity++;
        }
      });
      if (incrementCartHit === true) {
        return {
          ...state,
          basket: [...state.basket],
          isLoading: false,
          errorMessage: null,
        }
      } else {
        return {
          ...state,
          isLoading: false,
          errorMessage: null,
        }
      }
    case INCREMENT_BASKET_ITEM_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false,
      };
    case REMOVE_BASKET_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    case REMOVE_BASKET_ITEM_SUCCESS:
      var cartRemoveHit = false;
      state.basket.forEach(o => {
        if(o.id === action.payload.id) {
          if(o.quantity > 1) {
            cartRemoveHit = true;
            o.quantity--;
          }
        }
      });
      if (cartRemoveHit === false) {
        const removeIndex = state.basket.findIndex(
          o => o.id === action.payload.id
        );
        let newRemoveBasket = [...state.basket];

        if (removeIndex >= 0) {
          newRemoveBasket.splice(removeIndex, 1);
        } else {
          console.warn(
            `Product (id: ${action.id}) not found in basket!`
          )
        }
        return {
          ...state,
          basket: newRemoveBasket,
          isLoading: false,
          errorMessage: null,
        }
      } else {
        return {
          ...state,
          basket: [...state.basket],
          isLoading: false,
          errorMessage: null,
        }
      }
    case REMOVE_BASKET_ITEM_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false,
      };
    case DECREMENT_BASKET_ITEM_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    case DECREMENT_BASKET_ITEM_SUCCESS:
      let newIncrementedBasket = [];
      var cartRemoveOnDecrementHit = false;
      state.basket.forEach(o => {
        if(o.id === action.payload.id) {
          if(o.quantity > 1) {
            o.quantity--;
          } else {
            cartRemoveOnDecrementHit = true;
            const removeIndex = state.basket.findIndex(
              o => o.id === action.payload.id
            );
            newIncrementedBasket = [...state.basket];

            if (removeIndex >= 0) {
              newIncrementedBasket.splice(removeIndex, 1);
            } else {
              console.warn(
                `Product (id: ${action.id}) not found in basket!`
              )
            }
          }
        }
      });
      if (cartRemoveOnDecrementHit === true) {
        return {
          ...state,
          basket: newIncrementedBasket,
          isLoading: false,
          errorMessage: null,
        }
      } else {
        return {
          ...state,
          isLoading: false,
          errorMessage: null,
        }
      }
    case DECREMENT_BASKET_ITEM_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false,
      };
    case INCREMENT_BASKET_ITEM_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false,
      };
    case EMPTY_BASKET_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    case EMPTY_BASKET_SUCCESS:
      return {
        ...state,
        basket: [],
        isLoading: false,
        errorMessage: null,
      }
    case EMPTY_BASKET_ERROR:
      return {
        ...state,
        errorMessage: 'TODO',
        isLoading: false,
      };
    default:
      return state;
  }
};
