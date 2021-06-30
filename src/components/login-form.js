import {Field, Form, Formik} from 'formik';
import React from 'react';
import Router, {useRouter} from 'next/router';

import signIn from '../services/sign-in';
import style from '../styles/modules/forms.module.scss';
import isValidEmail from '../verifiers/is-valid-email';
import isValidPassword from '../verifiers/is-valid-password';
import Button from './button';
import Input from './input';
import Link from './link';
import Title from './title';

const captions = {
    title: 'Sign In',
    text: 'Don’t have anu account yet?',
    linkText: 'Sign Up',
    href: '/sign-up'
};

const LogInForm = () => {
    const {title, text, linkText, href} = captions;

    const router = useRouter()

    const handleSubmit = async data => {
        try {
            await signIn(data);
            router.push('/verification')
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className={style.form_container}>
            <Title>{title}</Title>

            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={handleSubmit}
            >
                {({values, isValidating, handleSubmit, dirty}) => (
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
                            <Button
                                onClick={handleSubmit}
                                valid={isValidating}
                                dirty={dirty}
                            >
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

export default LogInForm;
