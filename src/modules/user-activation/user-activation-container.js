import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import LoadingComponent from '@/components/loader';

import activationUser from '../../services/user/activation-user';
import UserActivate from './user-activation-component';

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

  if (loadingStatus) {
    return <LoadingComponent />;
  } else {
    return (
      <UserActivate
        tokenValid={tokenValid}
        userToken={userToken}
        captions={captions}
      />
    );
  }
};

export default UserActivateContainer;
