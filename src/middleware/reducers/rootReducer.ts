import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  order: orderReducer,
});

export default rootReducer;