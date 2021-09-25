import { Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '@/components/button/button';
import { ButtonWrap } from '@/components/button/button-style';
import { FormComponent, FormWrap } from '@/components/form';
import Input from '@/components/input/input';
import { InputWrap } from '@/components/input/input-style';
import { Link, Text, Title } from '@/components/text/';
import { InlineWrap } from '@/components/text/text-style';

const SignInFormComponent = ({
  captions: { title, text, linkText, href },
  handleSubmit,
  isValidEmail,
  isValidPassword,
  initialValues,
  isLoading
}) => (
  <FormWrap>
    <Title>{title}</Title>

    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, isValidating, handleSubmit, dirty }) => (
        <FormComponent>
          <InputWrap>
            <Field
              type="email"
              placeholder="Email"
              name="email"
              validate={isValidEmail}
              component={Input}
            />
          </InputWrap>

          <InputWrap>
            <Field
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              validate={isValidPassword}
              component={Input}
            />
          </InputWrap>
          <ButtonWrap>
            <Button
              onClick={handleSubmit}
              valid={isValidating}
              dirty={dirty}
              disabled={isLoading}
            >
              Sign in
            </Button>
          </ButtonWrap>
        </FormComponent>
      )}
    </Formik>

    <div>
      <InlineWrap>
        <Text>{text}</Text>
      </InlineWrap>

      <Link href={href}>{linkText}</Link>
    </div>
  </FormWrap>
);

SignInFormComponent.propTypes = {
  caption: PropTypes.object,
  handleSubmit: PropTypes.func,
  isValidEmail: PropTypes.func,
  isValidPassword: PropTypes.func,
  initialValues: PropTypes.object,
  isLoading: PropTypes.bool
};

export default SignInFormComponent;
