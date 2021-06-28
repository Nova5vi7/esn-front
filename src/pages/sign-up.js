import React from 'react';

import SignUpForm from '../components/signup-form';
import Auth from '../wrappers/auth';

const SignUp = () => (
    <Auth>
        <SignUpForm/>
    </Auth>
);

export default SignUp;
