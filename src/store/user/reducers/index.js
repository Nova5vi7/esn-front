import actionTypes from '../constants/action-types';

const initialState = {};

const User = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, ...action.payload.user };

    case actionTypes.CLEAR_USER:
      return { ...initialState };

    default:
      return state;
  }
};

export default User;
