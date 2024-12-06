import {
  addUserStart,
  addUserSuccess,
  addUserError,
  removeUserStart,
  removeUserSuccess,
  removeUserError,
} from '../reducers/userReducer';

export const addUserAction = (data) => dispatch => {
  try {
    dispatch(addUserStart())
    dispatch(addUserSuccess(data))
  } catch (err) {
    dispatch(addUserError(err))
  }
}

export const removeUserAction = () => dispatch => {
  try {
    dispatch(removeUserStart())

    dispatch(removeUserSuccess())
  } catch (err) {
    dispatch(removeUserError(err))
  }
}
