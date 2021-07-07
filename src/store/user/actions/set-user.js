import actionTypes from '../constants/action-types';

const setUser = user => ({
  type: actionTypes.SET_USER,
  payload: {
    user
  }
});

export default setUser;
