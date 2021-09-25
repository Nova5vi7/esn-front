import NotificationWrapper from '../styles/notifications-wrapper-style';
import NotificationItem from './notification-item';

const NotificationsWrapperComponent = ({ notifications, onHide }) => {
  return (
    <NotificationWrapper>
      {notifications.map(({ id, type, message }) => (
        <NotificationItem
          key={id}
          message={message}
          type={type}
          onClose={() => onHide(id)}
        />
      ))}
    </NotificationWrapper>
  );
};

export default NotificationsWrapperComponent;
