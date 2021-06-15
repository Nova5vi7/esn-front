import React from 'react';

import LogInForm from '../components/login-form';
import Auth from '../wrappers/auth';

const SingIn = () => (
  <Auth>
    <LogInForm />
  </Auth>
);

export default SingIn;
