import {
  addUserStart,
  addUserSuccess,
  addUserError
} from '../reducers/userReducer';

export const addUserAction = (data) => dispatch => {
  try {
    dispatch(addUserStart())

    dispatch(addUserSuccess(data))
  } catch (err) {
    dispatch(addUserError(err))
  }
}
