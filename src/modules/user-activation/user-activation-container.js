import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import activationUser from '../../services/user/activation-user';
import UserActivate from './user-activation-component';

const captions = {
  validMessage: 'Activation was successful. Congratulations !!!!!',
  invalidMessage: 'Activation token is not valid'
};

const UserActivateContainer = () => {
  const [tokenValid, setTokenValid] = useState(false);
  const {
    query: { id: userToken }
  } = useRouter();

  const activation = async () => {
    if (userToken) {
      try {
        await activationUser(userToken);
      } catch {
        setTokenValid(true);
      }
    }
  };

  useEffect(() => {
    activation();
  }, [userToken]);

  return (
    <UserActivate
      tokenValid={tokenValid}
      userToken={userToken}
      captions={captions}
    />
  );
};

export default UserActivateContainer;
