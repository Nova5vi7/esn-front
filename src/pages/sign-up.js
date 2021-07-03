import React from 'react';

import SignUpFormContainer from '../components/signup-form-container';
import Auth from '../wrappers/auth';

const SignUp = () => (
    <Auth>
        <SignUpFormContainer/>
    </Auth>
);

export default SignUp;
