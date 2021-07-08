import initialState from '../../initial-state';
import actionTypes from '../actions/action-types';

const products = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, ...action.payload.products };

    default:
      return state;
  }
};

export default products;
