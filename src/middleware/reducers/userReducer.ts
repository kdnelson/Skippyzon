import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: "",
  email: "",
  password: "",
  username: "",
  useraddress: "",
  isLoading: false,
  errorMessage: "",
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserStart: state => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    addUserSuccess: (state, action) => {
      state.id = action.payload.id,
      state.email = action.payload.email,
      state.password = action.payload.password,
      state.username = action.payload.username,
      state.useraddress = action.payload.useraddress,
      state.isLoading = false,
      state.errorMessage = ""
    },
    addUserError: state => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
    removeUserStart: state => {
      state.isLoading = true,
      state.errorMessage = ""
    },
    removeUserSuccess: state => {
      state.id = "",
      state.email = "",
      state.password = "",
      state.username = "",
      state.useraddress = "",
      state.isLoading = false,
      state.errorMessage = ""
    },
    removeUserError: state => {
      state.isLoading = false,
      state.errorMessage = "Something went very wrong"
    },
  },
});

export const {
  addUserStart,
  addUserSuccess,
  addUserError,
  removeUserStart,
  removeUserSuccess,
  removeUserError
} = userReducer.actions;
export default userReducer.reducer;