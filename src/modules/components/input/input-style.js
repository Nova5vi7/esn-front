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
  font-family: ${({ theme }) => theme.typo.fonts.default};
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
`;

const InputPhoneStyle = css`
    height: 100% !important;
    padding: 16px 16px 16px 48px !important;
    border: 1px solid ${({ theme }) => theme.colors.shade} !important;
    font-size: 16px !important;
    line-height: 1.25 !important;
    box-shadow: 0px 4px 8px rgb(44 39 56 / 4%);
    box-sizing: border-box;
    border-radius: 6px !important;
    background: ${({ theme }) => theme.colors.bright} !important;
    @include fontPlexSans();
    color: ${({ theme }) => theme.colors.muted};
`;

const ErrorStyle = css`
  position: absolute;
  bottom: -20px;
  font-size: 14px;
  line-height: 1.28;
  color: ${({ theme }) => theme.colors.error};
  font-family: 'IBMPlexSans-Regular', sans-serif;
`;

export const Input = styled.input`
  ${InputStyle}
`;

export const InputPhone = styled.input`
  ${InputPhoneStyle}
`;

export const Error = styled.div`
  ${ErrorStyle}
`;
