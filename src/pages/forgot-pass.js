import React from 'react';

import Container from '../components/container';
import ForgotPas from '../components/forgot-password-form';
import Link from '../components/link';

const ForgotPass = () => (
    <Container title="Get on board">
        <ForgotPas/>
        <Link
            text="New here ?"
            linkText="Sign up"
            linkHrf="/sign-up"
            className="links-log"
        />
    </Container>
);

export default ForgotPass;
