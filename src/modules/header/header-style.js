import styled, { css } from 'styled-components';

const headerStyle = css`
  padding: 15px 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const WrapContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  
  
  &.right {
    justify-content: flex-end;
  }
`;

export const Header = styled.div`
  ${headerStyle}
`;
