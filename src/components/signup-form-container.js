import React from 'react';
import Router, {useRouter} from 'next/router';

import SignInForm from "./signup-form";
import signUp from '../services/sign-up';
import isValidEmail from '../verifiers/is-valid-email';
import isValidName from '../verifiers/is-valid-name';
import isValidPassword from '../verifiers/is-valid-password';

const captions = {
    title: 'Sign Up',
    text: 'Already have an account?',
    linkText: 'Sign In',
    href: '/sign-in'
};

const initialValues = {
    name: '',
    email: '',
    password: ''
}

const SignUpFormContainer = () => {
    const {title, text, linkText, href} = captions;

    const router = useRouter()

    const handleSubmit = async data => {
        try {
            await signUp(data);
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
            isValidName={isValidName}
            isValidPassword={isValidPassword}
            initialValues={initialValues}
        />
    );
};

export default SignUpFormContainer;