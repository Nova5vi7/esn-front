import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import activationUser from '../../services/user/activation-user';
import UserActivate from './user-activation-component';
import LoadingComponent from '../components/loader';

const captions = {
  validMessage: 'Activation was successful. Congratulations !!!!!',
  invalidMessage: 'Activation token is not valid'
};

const UserActivateContainer = () => {
  const [tokenValid, setTokenValid] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);

  const {
    query: { id: userToken }
  } = useRouter();

  const activation = useCallback(async userToken => {
    if (!userToken) return;
    try {
      await activationUser(userToken);
      setTokenValid(true);
    } catch {
      setTokenValid(false);
    }
    setLoadingStatus(false);
  }, []);

  useEffect(() => {
    activation(userToken);
  }, [activation, userToken]);

  return (
    <>
      {loadingStatus ? (
        <LoadingComponent />
      ) : (
        <UserActivate
          tokenValid={tokenValid}
          userToken={userToken}
          captions={captions}
        />
      )}
    </>
  );
};

export default UserActivateContainer;
