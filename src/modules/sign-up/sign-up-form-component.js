import { Field, Formik } from 'formik';
import React from 'react';

import Button from '../components/button/button';
import { ButtonWrap } from '../components/button/button-style';
import { FormComponent, FormWrap } from '../components/form';
import Input from '../components/input/input';
import { InputWrap } from '../components/input/input-style';
import Link from '../components/text/link';
import Text from '../components/text/text';
import Title from '../components/text/title';
import isValidEmail from '../verification/verifiers/is-valid-email';
import isValidName from '../verification/verifiers/is-valid-name';
import isValidPassword from '../verification/verifiers/is-valid-password';

const SignUpFormComponent = ({ captions, handleSubmit, initialValues }) => {
  const { title, text, linkText, href } = captions;

  return (
    <FormWrap>
      <Title>{title}</Title>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isValid, handleSubmit, dirty }) => (
          <FormComponent>
            <InputWrap>
              <Field
                type="name"
                placeholder="Name"
                name="name"
                validate={isValidName}
                component={Input}
              />
            </InputWrap>

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
                validate={isValidPassword}
                component={Input}
              />
            </InputWrap>
            <ButtonWrap>
              <Button onClick={handleSubmit} valid={isValid} dirty={dirty}>
                Sign up
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

export default SignUpFormComponent;
