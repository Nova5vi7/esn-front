import actionTypes from '../constants/action-types';

const clearUser = user => ({
  type: actionTypes.CLEAR_USER,
  payload: {
    user
  }
});

export default clearUser;
