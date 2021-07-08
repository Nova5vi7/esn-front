import { combineReducers } from 'redux';

import product from './product/reducers/products';
import user from './user/reducers';

const createRootReducer = () =>
  combineReducers({
    product,
    user
  });

export default createRootReducer;
