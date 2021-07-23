import actionTypes from '../constants/action-types';

const hide = id => ({
  type: actionTypes.HIDE_NOTIFICATION,
  payload: { id }
});

export default hide;
