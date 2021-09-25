import { useRouter } from 'next/router';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import showNotification from 'store/notifications/actions/show';

import logoutService from '../../services/auth/logout';
import { pages } from '../verification/helpers';
import HeaderComponent from './header';

const HeaderContainer = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const triggerDropdown = useRef(null);

  const handleLogout = useCallback(async () => {
    try {
      await logoutService();
      window.localStorage.removeItem('token');
      await router.push('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, [router]);

  const testNotification = () => {
    dispatch(showNotification('alert', 'Lorem Ipsum'));
  };

  const handleDropdown = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const dropdownItem = [
    {
      onClick: handleLogout,
      text: 'Logout'
    },
    {
      onClick: testNotification,
      text: 'Notification'
    }
  ];

  return (
    <HeaderComponent
      dropdownItem={dropdownItem}
      handleDropdown={handleDropdown}
      showDropdown={showDropdown}
      setShowDropdown={setShowDropdown}
      pages={pages}
      triggerDropdown={triggerDropdown}
    />
  );
};

export default HeaderContainer;
