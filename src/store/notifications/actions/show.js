import actionTypes from '../constants/action-types';

const show = (type, message) => ({
  type: actionTypes.SHOW_NOTIFICATION,
  payload: {
    type,
    message
  }
});

export default show;
