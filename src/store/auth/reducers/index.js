import actionTypes from '../constants/action-types';

const initialState = {};

const User = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, ...action.payload.user };

    default:
      return state;
  }
};

export default User;
