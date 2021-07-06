import { Formik } from 'formik';
import React from 'react';

import styles from '../../styles/modules/forms.module.scss';
import Button from '../components/button/button';
import Input from '../components/input/input';

const LogInForm = ({ onSubmit, initialValues }) => (
  <div className={styles.formsLogIn}>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
        <>
          <Input
            type="email"
            placeholder="Email"
            inputName="email"
            className={styles.email}
            value={values.email}
            handleBlurTwo={handleBlur}
            handleChange={handleChange}
          />

          <Button
            className={styles.btn}
            handleSubmit={handleSubmit}
            valid={isValid}
            dirty={dirty}
          >
            Reset
          </Button>
        </>
      )}
    </Formik>
  </div>
);

export default LogInForm;
