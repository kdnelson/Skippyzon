import { createSelector } from 'reselect'

export const getUserState = state => state?.userState

export const getUser = createSelector(
  getUserState,
  userState => userState?.user
);

export const getIsLoading = createSelector(
  getUserState,
  userState => userState?.isLoading
);

export const getErrorMessage = createSelector(
  getUserState,
  userState => userState?.errorMessage
);