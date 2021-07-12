import React from 'react';

import Auth from '@/modules/layouts/auth';
import SignUpPage from '@/modules/sign-up';

const SignUp = () => (
  <Auth>
    <SignUpPage />
  </Auth>
);

export default SignUp;
