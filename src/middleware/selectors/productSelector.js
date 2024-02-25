import { createSelector } from 'reselect'

export const getProductState = state => state?.productState

export const getProductQuery = createSelector(
  getProductState,
  productState => productState?.productQuery
)

export const getProducts = createSelector(
  getProductState,
  productState => productState?.products
)

export const getIsLoading = createSelector(
  getProductState,
  productState => productState?.isLoading
)

export const getErrorMessage = createSelector(
  getProductState,
  productState => productState?.errorMessage
)
