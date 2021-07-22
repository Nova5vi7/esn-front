import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import HeaderComponent from './header';
import logoutService from '../../services/auth/logout';

const HeaderContainer = () => {
  const router = useRouter();
  const handleLogout = useCallback(async () => {
    try {
      await logoutService();
      window.localStorage.removeItem('token');
      await router.push('/');
    } catch (error) {
      console.log(error);
    }
  }, [router]);

  return <HeaderComponent onLogout={handleLogout} />;
};

export default HeaderContainer;
