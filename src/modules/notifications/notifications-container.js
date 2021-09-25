import { useDispatch, useSelector } from 'react-redux';

import hideNotification from '@/store/notifications/actions/hide';
import getNotifications from '@/store/notifications/selectors/get-notifications';

import NotificationsWrapper from './components/notifications-wrapper';

const NotificationContainer = () => {
  const notifications = useSelector(getNotifications);
  const dispatch = useDispatch();

  const handleHideNotification = id => {
    dispatch(hideNotification(id));
  };

  return (
    <NotificationsWrapper
      notifications={notifications}
      onHide={handleHideNotification}
    />
  );
};

export default NotificationContainer;
