import { combineReducers } from 'redux';

import notifications from './notifications/reducers';
import product from './product/reducers/products';
import user from './user/reducers';

const createRootReducer = () =>
  combineReducers({
    product,
    user,
    notifications
  });

export default createRootReducer;
