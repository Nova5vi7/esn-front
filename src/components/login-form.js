import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from '../styles/modules/forms.module.scss';
import signIn from '../services/sing-in';
import isValidEmail from '../verifiers/is-valid-email';
import isValidPassword from '../verifiers/is-valid-password';
import Button from './button';
import Input from './input';
import Title from './title';
import Link from './link';

const captions = {
  title: 'Sing In',
  text: 'Don’t have anu account yet?',
  linkText: 'Sing Up',
  href: '/sing-up'
};

const LogInForm = () => {
  const { title, text, linkText, href } = captions;

  const handleSubmit = async data => {
    await signIn(data);
  };

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
              handleSubmit={handleSubmit}
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
