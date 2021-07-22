import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import HeaderComponent from './header';
import logoutService from '../../services/auth/logout';

const HeaderContainer = () => {
  const router = useRouter();
  const handleLogout = useCallback(async () => {
    try {
      await logoutService();
      await router.push('/');
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <HeaderComponent onLogout={handleLogout} />;
};

export default HeaderContainer;
