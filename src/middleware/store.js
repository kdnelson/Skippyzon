import { combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { userReducer } from './reducers/userReducer';
import { productReducer } from './reducers/productReducer';
import { basketReducer } from './reducers/basketReducer';
import { orderReducer } from './reducers/orderReducer';
// TODO
//import { BasketService } from '../services';
// TODO
//import { USER_LOGOUT } from './actions/userActions';

const middleware = [
  thunk.withExtraArgument({
    //TODO basketService: new BasketService()
  }),
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basketState']
};

const appReducer = combineReducers({
  userState: userReducer,
  productState: productReducer,
  basketState: basketReducer,
  orderState: orderReducer
});

const rootReducer = (state, action) => {
  // TODO
  // if (action.type === USER_LOGOUT) {
  //   // Returning type and state as undefined so that each reducer can leverage the
  //   // default case to return the initial state
  //   return appReducer(undefined, { type: undefined });
  // }

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