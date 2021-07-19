import { Field, Formik } from 'formik';
import React from 'react';

import Button from '../components/button/button';
import { ButtonWrap } from '../components/button/button-style';
import { FormComponent, FormWrap } from '../components/form';
import Input from '../components/input/input';
import { InputWrap } from '../components/input/input-style';
import { Link, Text, Title } from '../components/text/';

const SignInFormComponent = ({
  captions,
  handleSubmit,
  isValidEmail,
  isValidPassword,
  initialValues
}) => {
  const { title, text, linkText, href } = captions;

  return (
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
              <Button onClick={handleSubmit} valid={isValidating} dirty={dirty}>
                Sign in
              </Button>
            </ButtonWrap>
          </FormComponent>
        )}
      </Formik>

      <div>
        <Text display={'inline-block'}>{text}</Text>
        <Link href={href}>{linkText}</Link>
      </div>
    </FormWrap>
  );
};

export default SignInFormComponent;
