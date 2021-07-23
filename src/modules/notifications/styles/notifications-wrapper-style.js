import styled from 'styled-components';

const NotificationWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 100%;
  max-width: 320px;
  z-index: ${({ theme }) => theme.zIndex.top};
`;

export default NotificationWrapper;
