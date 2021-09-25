import initialState from '../../initial-state';
import actionTypes from '../actions/action-types';

const products = (state = initialState, action) => {
  if (action.type === actionTypes.SET_PRODUCTS) {
    return { ...state, ...action.payload.products };
  }

  return state;
};

export default products;
