import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import verifyToken from '../../../services/auth/verify-token';

const withAuth = WrappedComponent => {
  return props => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
      const accessToken = localStorage.getItem('token');

      if (!accessToken) {
        Router.replace('/sign-in');
      } else {
        const data = await verifyToken();

        if (data) {
          setVerified(true);
        } else {
          localStorage.removeItem('token');

          Router.replace('/sign-in');
        }
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
