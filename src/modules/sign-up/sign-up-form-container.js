import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import signUp from '../../services/sign-up';
import isValidEmail from '../../verifiers/is-valid-email';
import isValidName from '../../verifiers/is-valid-name';
import isValidPassword from '../../verifiers/is-valid-password';
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

  const handleSubmit = useCallback(
    async data => {
      await signUp(data);
      await router.push('/verification');
    },
    [router]
  );

  return (
    <SignUpFormComponent
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
