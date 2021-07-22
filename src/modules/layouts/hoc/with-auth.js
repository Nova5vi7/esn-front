import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import verifyToken from '../../../services/auth/verify-token';

const withAuth = WrappedComponent => {
  return properties => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const verifyLogic = async () => {
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
      };

      verifyLogic(); //TODO Проверить работу этой функции
    }, [Router]);

    return <>{verified ? <WrappedComponent {...properties} /> : null}</>;
  };
};

export default withAuth;
