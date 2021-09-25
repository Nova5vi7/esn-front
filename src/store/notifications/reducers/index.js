import actionTypes from '../constants/action-types';

const Notifications = (state = [], { message, type, ...payload }) => {
  switch (type) {
    case actionTypes.SHOW_NOTIFICATION:
      return [
        {
          message,
          type,
          id: Date.now()
        },
        ...state
      ];

    case actionTypes.HIDE_NOTIFICATION:
      return state.filter(({ id }) => id !== payload.id);

    default:
      return state;
  }
};

export default Notifications;
