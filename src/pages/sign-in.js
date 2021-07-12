import SignInPage from 'modules/sign-in';
import React from 'react';

import Auth from '@/modules/layouts/auth';

const SignIn = () => (
  <Auth>
    <SignInPage />
  </Auth>
);

export default SignIn;
