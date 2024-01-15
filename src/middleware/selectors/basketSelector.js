import { createSelector } from 'reselect'

export const getBasketState = state => state?.basketState

export const getBasket = createSelector(
  getBasketState,
  basketState => basketState?.basket
);

export const getIsLoading = createSelector(
  getBasketState,
  basketState => basketState?.isLoading
);

export const getErrorMessage = createSelector(
  getBasketState,
  basketState => basketState?.errorMessage
);