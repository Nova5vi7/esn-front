import React from 'react';

import SignInFormContainer from '../components/signin-form-container';
import Auth from '../wrappers/auth';

const SignIn = () => (
    <Auth>
        <SignInFormContainer/>
    </Auth>
);

export default SignIn;
