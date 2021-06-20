import { Field, Form, Formik } from 'formik';
import React from 'react';

import style from '../styles/modules/verification.module.scss';
import isValidName from '../verifiers/is-valid-name';
import Button from './button';
import Input from './input';
import InputFile from './input-file';

const handleSubmit = async data => {
  console.log(data);
};

const verificationForm = () => {
  return (
    <div className={style.verificationForm}>
      <div className={style.verificationForm__formWrap}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phone: ''
          }}
          onSubmit={handleSubmit}
        >
          {({ isValid, handleSubmit, dirty }) => (
            <Form className={style.verificationForm__form}>
              <div className={style.verificationForm__userImageWrap}>
                <InputFile className={style.verificationForm__image} />
              </div>

              <div className={style.verificationForm__inputsWrap}>
                <div className={style.verificationForm__inputWrap}>
                  <Field
                    type="name"
                    placeholder="First name"
                    name="firstName"
                    validate={isValidName}
                    component={Input}
                  />
                </div>

                <div className={style.verificationForm__inputWrap}>
                  <Field
                    type="name"
                    placeholder="Last name"
                    name="lastName"
                    validate={isValidName}
                    component={Input}
                  />
                </div>

                <div className={style.verificationForm__inputWrap}>
                  <Field
                    type="phone"
                    placeholder="Phone"
                    name="phone"
                    //   validate={isValidPassword}
                    component={Input}
                  />
                </div>
              </div>

              <Button handleSubmit={handleSubmit} valid={isValid} dirty={dirty}>
                Continue
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default verificationForm;
