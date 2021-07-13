import { Field, Form, Formik } from 'formik';
import React from 'react';

import style from '../../styles/modules/forms.module.scss';
import Button from '../components/button/button';
import Input from '../components/input/input';
import Link from '../components/text/link';
import Title from '../components/text/title';
import isValidEmail from '../verification/verifiers/is-valid-email';
import isValidName from '../verification/verifiers/is-valid-name';
import isValidPassword from '../verification/verifiers/is-valid-password';

const SignUpFormComponent = ({ captions, handleSubmit, initialValues, loading }) => {
  const { title, text, linkText, href } = captions;

  return (
    <div className={style.form_container}>
      <Title>{title}</Title>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isValid, handleSubmit, dirty }) => (
          <Form className={style.formsSignUp}>
            <div className={style.inputWrap}>
              <Field
                type="name"
                placeholder="Name"
                name="name"
                validate={isValidName}
                component={Input}
              />
            </div>

            <div className={style.inputWrap}>
              <Field
                type="email"
                placeholder="Email"
                name="email"
                validate={isValidEmail}
                component={Input}
              />
            </div>

            <div className={style.inputWrap}>
              <Field
                type="password"
                placeholder="Password"
                name="password"
                validate={isValidPassword}
                component={Input}
              />
            </div>
            <div className={style.buttonWrap}>
              <Button onClick={handleSubmit} valid={isValid} dirty={dirty} loading={loading}>
                {loading ? 'Sending...' : 'Sign up'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      <div className={style.link_wrap}>
        <p>{text}</p>
        <Link href={href}>{linkText}</Link>
      </div>
    </div>
  );
};

export default SignUpFormComponent;
