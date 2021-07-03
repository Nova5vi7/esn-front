import React from 'react';
import {useRouter} from 'next/router';

import SignInForm from './signin-form';
import signIn from '../services/sign-in';
import isValidEmail from '../verifiers/is-valid-email';
import isValidPassword from '../verifiers/is-valid-password';

const captions = {
    title: 'Sign In',
    text: 'Don’t have anu account yet?',
    linkText: 'Sign Up',
    href: '/sign-up'
};

const initialValues = {
    email: '',
    password: ''
}

const SignInFormContainer = () => {
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
        <SignInForm
            captions={captions}
            handleSubmit={handleSubmit}
            isValidEmail={isValidEmail}
            isValidPassword={isValidPassword}
            initialValues={initialValues}
        />
    );
};

export default SignInFormContainer;
