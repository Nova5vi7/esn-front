import React from 'react';

import SignInPage from 'modules/sign-in';
import Auth from 'modules/wrappers/auth';

const SignIn = () => (
  <Auth>
    <SignInPage />
  </Auth>
);

export default SignIn;
