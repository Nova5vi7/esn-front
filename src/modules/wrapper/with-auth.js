import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import LoadingComponent from '@/components/loader';
import verifyToken from '@/services/auth/verify-token';
import setUser from '@/store/user/actions/set-user';

const WithAuth = WrappedComponent => properties => {
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const dispatch = useDispatch();

  const verifyLogic = useCallback(async () => {
    const accessToken = localStorage.getItem('token');

    if (!accessToken) {
      await router.replace('/sign-in');
    } else {
      const userData = await verifyToken();
      dispatch(setUser(userData));

      if (userData) {
        setVerified(true);
      } else {
        localStorage.removeItem('token');

        await router.replace('/sign-in');
      }
    }
    setLoadingStatus(false);
  }, [router, dispatch]);

  useEffect(() => {
    verifyLogic();
  }, [verifyLogic]);

  if (loadingStatus) {
    return <LoadingComponent />;
  } else if (verified) {
    return <WrappedComponent {...properties} />;
  }
};

export default WithAuth;
