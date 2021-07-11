import SignUpPage from 'modules/sign-up';
import Auth from '@/modules/layouts/auth';
import React from 'react';

const SignUp = () => (
  <Auth>
    <SignUpPage />
  </Auth>
);

export default SignUp;
