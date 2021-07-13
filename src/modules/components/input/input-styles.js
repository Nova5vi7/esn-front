import styled, { css } from 'styled-components';

const InputStyle = css`
  position: relative;
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.bright};
  border: 1px solid ${({ theme }) => theme.colors.shade};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.muted};
  font-family: 'IBMPlexSans-Regular', sans-serif; 
  font-size: 16px;
  line-height: 1.25;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }

  &:placeholder {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 16px;
    line-height: 1.25;
    color: rgba(255, 255, 255, 0.6);
  }
`

export const Input = styled.input`
  ${InputStyle}
`;