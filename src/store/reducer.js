import { combineReducers } from 'redux';

import auth from './auth/reducers';
import product from './product/reducers/products';

const createRootReducer = () =>
  combineReducers({
    product,
    auth
  });

export default createRootReducer;
