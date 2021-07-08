import { Field, Form, Formik } from 'formik';
import React from 'react';

import style from '../../styles/modules/forms.module.scss';
import Button from '../components/button/button';
import Input from '../components/input/input';
import Link from '../components/text/link';
import Title from '../components/text/title';

const SignInFormComponent = ({
  captions,
  handleSubmit,
  isValidEmail,
  isValidPassword,
  initialValues
}) => {
  const { title, text, linkText, href } = captions;

  return (
    <div className={style.form_container}>
      <Title>{title}</Title>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, isValidating, handleSubmit, dirty }) => (
          <Form className={style.formsLogIn}>
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
                value={values.password}
                validate={isValidPassword}
                component={Input}
              />
            </div>
            <div className={style.buttonWrap}>
              <Button onClick={handleSubmit} valid={isValidating} dirty={dirty}>
                Sign in
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

export default SignInFormComponent;
