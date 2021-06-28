import React from 'react';

import LogInForm from '../components/login-form';
import Auth from '../wrappers/auth';

const SignIn = () => (
    <Auth>
        <LogInForm/>
    </Auth>
);

export default SignIn;
