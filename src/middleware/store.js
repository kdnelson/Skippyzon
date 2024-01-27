import { combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { userReducer } from './reducers/userReducer';
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { orderReducer } from './reducers/orderReducer';

const middleware = [
  thunk.withExtraArgument({
  }),
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartState']
};

const appReducer = combineReducers({
  userState: userReducer,
  productState: productReducer,
  cartState: cartReducer,
  orderState: orderReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};