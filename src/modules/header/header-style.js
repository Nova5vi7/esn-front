import styled, { css } from 'styled-components';

const headerStyle = css`
  padding: 15px 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.div`
  ${headerStyle}
`;
