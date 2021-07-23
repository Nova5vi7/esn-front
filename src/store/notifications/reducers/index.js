import actionTypes from '../constants/action-types';

const Notifications = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SHOW_NOTIFICATION:
      const { message, type } = action.payload;
      return [
        {
          message,
          type,
          id: Date.now()
        },
        ...state
      ];

    case actionTypes.HIDE_NOTIFICATION:
      return state.filter(({ id }) => id !== action.payload.id);

    default:
      return state;
  }
};

export default Notifications;
