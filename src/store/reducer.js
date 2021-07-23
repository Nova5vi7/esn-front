import { combineReducers } from 'redux';

import product from './product/reducers/products';
import user from './user/reducers';
import notifications from './notifications/reducers';

const createRootReducer = () =>
  combineReducers({
    product,
    user,
    notifications
  });

export default createRootReducer;
