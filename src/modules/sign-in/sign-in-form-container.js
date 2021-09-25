import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import signIn from 'services/auth/sign-in';

import showNotification from '@/store/notifications/actions/show';
import setUser from '@/store/user/actions/set-user';

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
  const dispatch = useDispatch();
  const [isLoading, setLoadingStatus] = useState(false);

  const handleSubmit = async data => {
    setLoadingStatus(true);

    try {
      const { accessToken, user } = await signIn(data);
      window.localStorage.setItem('token', accessToken);
      dispatch(setUser(user));
      await router.push('/verification');
    } catch (error) {
      setLoadingStatus(false);
      dispatch(showNotification('alert', error.message));
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
