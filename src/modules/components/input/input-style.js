import styled, { css } from 'styled-components';

const inputWrapStyle = css`
  position: relative;
  width: 100%;
  margin-bottom: 28px;

  &:last-child {
    margin: 0;
  }
`;

const inputStyle = css`
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
  font-size: ${({ theme }) => theme.ms(2)};
  line-height: ${({ theme }) => theme.ms(2)};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }

  &:placeholder {
    color: ${({ theme }) => theme.colors.muted};
    font-size: ${({ theme }) => theme.ms(2)};
    line-height: ${({ theme }) => theme.ms(2)};
    color: rgba(255, 255, 255, 0.6);
  }
`;

const inputPhoneStyle = css`
  input {
    width: 100% !important;
    height: 100% !important;
    padding: 16px 16px 16px 48px !important;
    border: 1px solid ${({ theme }) => theme.colors.shade} !important;
    font-size: ${({ theme }) => theme.ms(2)} !important;
    line-height: ${({ theme }) => theme.ms(2)} !important;
    box-shadow: 0px 4px 8px rgb(44 39 56 / 4%);
    box-sizing: border-box;
    border-radius: 6px !important;
    background: ${({ theme }) => theme.colors.bright} !important;
    @include fontPlexSans();
    color: ${({ theme }) => theme.colors.muted};
  }
`;

const inputFileStyle = css`
  display: none;
`;

const errorStyle = css`
  position: absolute;
  bottom: -20px;
  font-size: ${({ theme }) => theme.ms(1.5)};
  line-height: ${({ theme }) => theme.ms(1.5)};
  color: ${({ theme }) => theme.colors.error};
  font-family: 'IBMPlexSans-Regular', sans-serif;
`;

const inputsWrapStyle = css`
  width: 100%;
  margin-bottom: 80px;
`;

export const InputsWrap = styled.div`
  ${inputsWrapStyle}
`;

export const InputWrap = styled.div`
  ${inputWrapStyle}
`;

export const Input = styled.input`
  ${inputStyle}
`;

export const InputPhone = styled.div`
  ${inputPhoneStyle}
`;

export const InputFile = styled.input`
  ${inputFileStyle}
`;

export const Error = styled.div`
  ${errorStyle}
`;
