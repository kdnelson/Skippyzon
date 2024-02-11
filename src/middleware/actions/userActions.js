import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  REMOVE_USER_START,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_ERROR
} from './actionTypes'

export const addUserStart = () => ({
  type: ADD_USER_START
})

export const addUserSuccess = data => ({
  type: ADD_USER_SUCCESS,
  payload: data
})

export const addUserError = errorMessage => ({
  type: ADD_USER_ERROR,
  payload: errorMessage
})

export const removeUserStart = () => ({
  type: REMOVE_USER_START
})

export const removeUserSuccess = () => ({
  type: REMOVE_USER_SUCCESS
})

export const removeUserError = errorMessage => ({
  type: REMOVE_USER_ERROR
})

export const addUserAction = data => async dispatch => {
  try {
    dispatch(addUserStart())

    dispatch(
      addUserSuccess({
        data
      })
    )
  } catch (err) {
    dispatch(addUserError(err))
  }
}

export const removeUserAction = () => async dispatch => {
  try {
    dispatch(removeUserStart())

    dispatch(removeUserSuccess())
  } catch (err) {
    dispatch(removeUserError(err))
  }
}
