import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import signUp from 'services/auth/sign-up';
import setUser from 'store/user/actions/set-user';

import SignUpFormComponent from './sign-up-form-component';

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
};

const SignUpFormContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async data => {
      const { accessToken, user } = await signUp(data);
      window.localStorage.setItem('token', accessToken);
      dispatch(setUser(user));
      await router.push('/verification');
    },
    [router, dispatch]
  );

  return (
    <SignUpFormComponent
      captions={captions}
      handleSubmit={handleSubmit}
      initialValues={initialValues}
    />
  );
};

export default SignUpFormContainer;
