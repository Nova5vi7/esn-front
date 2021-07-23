import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import HeaderComponent from './header';
import logoutService from '../../services/auth/logout';
import { useDispatch, useSelector } from 'react-redux';

import showNotification from 'store/notifications/actions/show';

const HeaderContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    try {
      await logoutService();
      window.localStorage.removeItem('token');
      await router.push('/');
    } catch (error) {
      console.log(error);
    }
  }, [router]);

  const testNotification = () => {
    dispatch(showNotification('alert', 'Lorem Ipsum'));
  };

  return (
    <HeaderComponent
      testNotification={testNotification}
      onLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
