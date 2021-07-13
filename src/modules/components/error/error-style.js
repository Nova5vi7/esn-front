import styled, { css } from 'styled-components';

const ErrorStyle = css`
  position: absolute;
  bottom: -20px;
  font-size: 14px;
  line-height: 1.28;
  color: ${({ theme }) => theme.colors.error};
  font-family: 'IBMPlexSans-Regular', sans-serif;
`;

export const Error = styled.div`
  ${ErrorStyle}
`;
