import { useRouter } from 'next/router';
import React, { useState } from 'react';
import signIn from 'services/auth/sign-in';

import isValidEmail from '../verification/verifiers/is-valid-email';
import isValidPassword from '../verification/verifiers/is-valid-password';
import SignInFormComponent from './sign-in-form-component';

const captions = {
  title: 'Sign In',
  text: 'Don’t have anu account yet?',
  linkText: 'Sign Up',
  href: '/sign-up'
};

const initialValues = {
  email: '',
  password: ''
};

const SignInFormContainer = () => {
  const router = useRouter();
  const [isLoading, setLoadingStatus] = useState(false);

  const handleSubmit = async data => {
    setLoadingStatus(true);

    try {
      const { accessToken } = await signIn(data);
      window.localStorage.setItem('token', accessToken);
      await router.push('/verification');
    } catch (error) {
      setLoadingStatus(false);
      console.log(error);
    }
  };

  return (
    <SignInFormComponent
      captions={captions}
      handleSubmit={handleSubmit}
      isValidEmail={isValidEmail}
      isValidPassword={isValidPassword}
      initialValues={initialValues}
      isLoading={isLoading}
    />
  );
};

export default SignInFormContainer;
