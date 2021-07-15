import styled, { css } from 'styled-components';
import { Form } from 'formik';

const verificationStyle = css`
  padding: 90px 0;
  max-width: 630px;
  width: 100%;
  margin: 0 auto;
`;

const formWrapStyle = css`
  padding: 88px 110px 42px;
  background-color: #ffffff;
  border-radius: 3px;
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.22));
`;

const formStyle = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const VerificationWrap = styled.div`
  ${verificationStyle}
`;

export const FormWrap = styled.div`
  ${formWrapStyle}
`;

export const FormComponent = styled(Form)`
  ${formStyle}
`;
