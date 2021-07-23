import { Text, Title } from '@/components/text';
import Icon from '@/components/icon';
import NotificationItem from '../styles/notification-item-style';
import CloseButton from '../styles/close-button';

const NotificationItemComponent = ({ type, message, onClose }) => (
  <NotificationItem type={type}>
    <Title scheme="dark">Alert!</Title>
    <Text scheme="dark">{message}</Text>
    <CloseButton onClick={onClose}>
      <Icon type="cross" fill="#fff" />
    </CloseButton>
  </NotificationItem>
);

export default NotificationItemComponent;
