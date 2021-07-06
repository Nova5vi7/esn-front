import React from 'react';

import SignUpPage from '../modules/sign-up';
import Auth from '../modules/wrappers/auth';

const SignUp = () => (
  <Auth>
    <SignUpPage />
  </Auth>
);

export default SignUp;
