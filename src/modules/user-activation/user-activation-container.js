import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import activationUser from '../../services/user/activation-user';
import UserActivate from './user-activation-component';

const UserActivateContainer = () => {
  const [tokenValid, setTokenValid] = useState(false);
  const { query } = useRouter();
  const userToken = query.id;

  useEffect(async () => {
    if (userToken) {
      try {
        await activationUser(userToken);
      }catch (err) {
        setTokenValid(true)
      }
    }
  }, [userToken]);

  return <UserActivate tokenValid={tokenValid} userToken={userToken} />;
};

export default UserActivateContainer;
