import React from 'react';

import Wrap from '@/modules/layouts/main';
import withAuth from '@/modules/wrapper/with-auth';
import VerificationFormContainer from '@/modules/verification';

const VerificationPage = () => (
  <Wrap>
    <VerificationFormContainer />
  </Wrap>
);

export default withAuth(VerificationPage);
