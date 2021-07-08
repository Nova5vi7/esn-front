import SignInPage from 'modules/sign-in';
import Auth from 'modules/wrappers/auth';
import React from 'react';

const SignIn = () => (
  <Auth>
    <SignInPage />
  </Auth>
);

export default SignIn;
