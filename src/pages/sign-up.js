import SignUpPage from 'modules/sign-up';
import Auth from 'modules/wrappers/auth';
import React from 'react';

const SignUp = () => (
  <Auth>
    <SignUpPage />
  </Auth>
);

export default SignUp;
