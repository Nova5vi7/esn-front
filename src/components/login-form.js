import { Field, Form, Formik } from 'formik';
import React from 'react';

import signIn from '../services/sing-in';
import styles from '../styles/modules/forms.module.scss';
import isValidEmail from '../verifiers/is-valid-email';
import isValidPassword from '../verifiers/is-valid-password';
import Button from './button';
import Input from './input';
import Link from './link';
import Title from './title';

const captions = {
  title: 'Sing In',
  text: 'Don’t have anu account yet?',
  linkText: 'Sing Up',
  href: '/sing-up'
};

const handleSubmit = async data => {
  await signIn(data);
};

const LogInForm = () => {
  const { title, text, linkText, href } = captions;

  return (
    <div className={styles.form_container}>
      <Title>{title}</Title>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={handleSubmit}
      >
        {({ values, isValidating, handleSubmit, dirty }) => (
          <Form className={styles.formsLogIn}>
            <div className={styles.inputWrap}>
              <Field
                type="email"
                placeholder="Email"
                name="email"
                validate={isValidEmail}
                component={Input}
              />
            </div>

            <div className={styles.inputWrap}>
              <Field
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                validate={isValidPassword}
                component={Input}
              />
            </div>

            <Button
              handleClick={handleSubmit}
              valid={isValidating}
              dirty={dirty}
            >
              Sign in
            </Button>
          </Form>
        )}
      </Formik>

      <div className={styles.link_wrap}>
        <p>{text}</p>
        <Link href={href}>{linkText}</Link>
      </div>
    </div>
  );
};

export default LogInForm;
