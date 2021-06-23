import { Field, Form, Formik } from 'formik';
import React from 'react';

import signUp from '../services/sign-up';
import styles from '../styles/modules/forms.module.scss';
import isValidEmail from '../verifiers/is-valid-email';
import isValidName from '../verifiers/is-valid-name';
import isValidPassword from '../verifiers/is-valid-password';
import Button from './button';
import Input from './input';
import Link from './link';
import Title from './title';

const captions = {
  title: 'Sing Up',
  text: 'Already have an account?',
  linkText: 'Sing In',
  href: '/sing-in'
};

const handleSubmit = async data => {
  console.log(data);
  await signUp(data);
};

const SignUpForm = () => {
  const { title, text, linkText, href } = captions;

  return (
    <div className={styles.form_container}>
      <Title>{title}</Title>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}
        onSubmit={handleSubmit}
      >
        {({ isValid, handleSubmit, dirty }) => (
          <Form className={styles.formsSingUp}>
            <div className={styles.inputWrap}>
              <Field
                type="name"
                placeholder="Name"
                name="name"
                validate={isValidName}
                component={Input}
              />
            </div>

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
                validate={isValidPassword}
                component={Input}
              />
            </div>

            <Button handleClick={handleSubmit} valid={isValid} dirty={dirty}>
              Sign up
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

export default SignUpForm;
