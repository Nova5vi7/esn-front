import { useRouter } from 'next/router';
import React, { useEffect, useState, useCallback } from 'react';
import verifyToken from 'services/auth/verify-token';
import LoadingComponent from '@/components/loader';

const WithAuth = WrappedComponent => properties => {
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);

  const verifyLogic = useCallback(async () => {
    const accessToken = localStorage.getItem('token');

    if (!accessToken) {
      router.replace('/sign-in');
    } else {
      const response = await verifyToken();

      if (response) {
        setVerified(true);
      } else {
        localStorage.removeItem('token');

        router.replace('/sign-in');
      }
    }
    setLoadingStatus(false);
  }, [router]);

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
