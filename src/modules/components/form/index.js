import styled, { css } from 'styled-components';
import { Form } from 'formik';

const FormWrapStyle = css`
  max-width: 409px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 125px;
`;

const FormStyle = css`
  width: 100%;
  margin-bottom: 100px;
`;

export const FormWrap = styled.div`
  ${FormWrapStyle}
`;

export const FormComponent = styled(Form)`
  ${FormStyle}
`;
