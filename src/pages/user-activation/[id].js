import React from 'react';
import withAuth from '../../modules/layouts/hoc/with-auth';
import Wrap from '@/modules/layouts/main';
import UserActivate from '../../modules/user-activation';

const UserActivatePage = () => {
  return (
    <Wrap>
      <UserActivate />
    </Wrap>
  );
};

export default withAuth(UserActivatePage);
