import { Form } from 'formik';
import styled, { css } from 'styled-components';

const formWrapStyle = css`
  max-width: 409px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 125px;
`;

const formStyle = css`
  width: 100%;
  margin-bottom: 100px;
`;

export const FormWrap = styled.div`
  ${formWrapStyle}
`;

export const FormComponent = styled(Form)`
  ${formStyle}
`;
