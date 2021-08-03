import { useRouter } from 'next/router';
import React, { useEffect, useState, useCallback } from 'react';
import verifyToken from '@/services/auth/verify-token';
import LoadingComponent from '@/components/loader';
import { useDispatch } from 'react-redux';
import setUser from '@/store/user/actions/set-user';

const WithAuth = WrappedComponent => properties => {
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const dispatch = useDispatch();

  const verifyLogic = useCallback(async () => {
    const accessToken = localStorage.getItem('token');

    if (!accessToken) {
      router.replace('/sign-in');
      return;
    } else {
      const userData = await verifyToken();
      dispatch(setUser(userData));

      if (userData) {
        setVerified(true);
      } else {
        localStorage.removeItem('token');

        router.replace('/sign-in');
        return
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
