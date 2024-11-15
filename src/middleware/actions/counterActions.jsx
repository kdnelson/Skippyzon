import {
  INCREMENT_COUNTER_START,
  INCREMENT_COUNTER_SUCCESS,
  INCREMENT_COUNTER_ERROR,
} from './actionTypes'

export const incrementCounterStart = () => ({
  type: INCREMENT_COUNTER_START
})

export const incrementCounterSuccess = data => ({
  type: INCREMENT_COUNTER_SUCCESS,
  payload: data
})

export const incrementCounterError = errorMessage => ({
  type: INCREMENT_COUNTER_ERROR,
  payload: errorMessage
})

export const incrementCounterAction = data => async dispatch => {
  try {
    dispatch(incrementCounterStart())

    dispatch(
      incrementCounterSuccess({
        data
      })
    )
  } catch (err) {
    dispatch(incrementCounterError(err))
  }
}