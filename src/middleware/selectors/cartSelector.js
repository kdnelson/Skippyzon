import { createSelector } from 'reselect'

export const getCartState = state => state?.cartState

export const getCartSelector = createSelector(
  getCartState,
  cartState => cartState?.cart
)

export const getIsLoading = createSelector(
  getCartState,
  cartState => cartState?.isLoading
)

export const getErrorMessage = createSelector(
  getCartState,
  cartState => cartState?.errorMessage
)
