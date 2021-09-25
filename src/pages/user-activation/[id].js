import UserActivate from 'modules/user-activation';
import React from 'react';

import Wrap from '@/modules/layouts/main';
import withAuth from '@/modules/wrapper/with-auth';

const UserActivatePage = () => (
  <Wrap>
    <UserActivate />
  </Wrap>
);

export default withAuth(UserActivatePage);
