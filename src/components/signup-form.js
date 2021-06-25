import {Field, Form, Formik} from 'formik';
import React from 'react';

import signUp from '../services/sign-up';
import style from '../styles/modules/forms.module.scss';
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
    const {title, text, linkText, href} = captions;

    return (
        <div className={style.form_container}>
            <Title>{title}</Title>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: ''
                }}
                onSubmit={handleSubmit}
            >
                {({isValid, handleSubmit, dirty}) => (
                    <Form className={style.formsSingUp}>
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
                            <Button onClick={handleSubmit} valid={isValid} dirty={dirty}>
                                Sign up
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

export default SignUpForm;
