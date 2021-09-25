import { animated } from 'react-spring';
import styled from 'styled-components';

const getNotificationBackgroundColor = (type, theme) => {
  if (type === 'alert') return theme.colors.error;

  return theme.colors.muted;
};

const NotificationItem = styled(animated.div)`
  position: relative;
  background-color: ${({ theme, type }) =>
    getNotificationBackgroundColor(type, theme)};
  border-radius: ${({ theme }) => theme.borderRadius.l}px;
  width: 100%;
  padding: 15px 45px 15px 15px;
  margin-bottom: 15px;
  user-select: none;
  overflow: hidden;
  box-sizing: border-box;
`;

export default NotificationItem;
