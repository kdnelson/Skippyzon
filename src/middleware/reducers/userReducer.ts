import { createSlice } from '@reduxjs/toolkit';
import { User } from './../../models/user'

const initialState = {
  user: null,
  isLoading: false,
  errorMessage: ""
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserStart: (state) => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    addUserSuccess: (state, action) => {
      var newUser = User
      state.user = Object.assign(newUser, action.payload.data),
      state.isLoading = false,
      state.errorMessage = ""
    },
    addUserError: (state) => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
  },
});

export const {
  addUserStart,
  addUserSuccess,
  addUserError
} = userReducer.actions;
export default userReducer.reducer;