import { createSelector } from 'reselect'

export const getOrderState = state => state?.orderState

export const getOrdersSelector = createSelector(
  getOrderState,
  orderState => orderState?.order
)

export const getIsLoading = createSelector(
  getOrderState,
  orderState => orderState?.isLoading
)

export const getErrorMessage = createSelector(
  getOrderState,
  orderState => orderState?.errorMessage
)
