import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  REMOVE_USER_START,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_ERROR
} from '../actions/actionTypes'
import { User } from '../../models/user'

export const INITIAL_STATE = {
  user: null,
  isLoading: false,
  errorMessage: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    case ADD_USER_SUCCESS:
      state.user = User
      return {
        user: Object.assign(state.user, action.payload.data),
        isLoading: false,
        errorMessage: null
      }
    case ADD_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'TODO'
      }
    case REMOVE_USER_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        user: null,
        isLoading: false,
        errorMessage: null
      }
    case REMOVE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'TODO'
      }
    default:
      return state
  }
}
