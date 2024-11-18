import {
  incrementStart,
  incrementSuccess,
  incrementError
} from './../reducers/counterReducer';

export const addIncrementAction = (data) => dispatch => {
  try {
    dispatch(incrementStart())

    dispatch(incrementSuccess(data))
  } catch (err) {
    dispatch(incrementError(err))
  }
}
