import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import activationUser from '../../services/user/activation-user';
import UserActivate from './user-activation-component';

const UserActivateContainer = () => {
  const [tokenValid, setTokenValid] = useState(false);
  const { query } = useRouter();
  const userToken = query.id;

  useEffect(() => {
    const activation = async () => {
      if (userToken) {
        try {
          await activationUser(userToken);
        } catch {
          setTokenValid(true);
        }
      }
    };

    activation(); //TODO Проверить работу этой функции
  }, [userToken]);

  return <UserActivate tokenValid={tokenValid} userToken={userToken} />;
};

export default UserActivateContainer;
