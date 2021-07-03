import {Formik} from 'formik';
import React from 'react';

import styles from '../styles/modules/forms.module.scss';
import Button from './button';
import Input from './input';

const LogInForm = ({handleSubmit, initialValues}) => (
    <div className={styles.formsLogIn}>
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({values, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
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
                        className={styles.btn_sign_in}
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
