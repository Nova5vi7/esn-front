import { combineReducers } from 'redux';

import user from './user/reducers';
import product from './product/reducers/products';

const createRootReducer = () =>
  combineReducers({
    product,
    user
  });

export default createRootReducer;
