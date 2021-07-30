import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import { pages } from '../verification/helpers';
import HeaderComponent from './header';
import logoutService from '../../services/auth/logout';
import { useDispatch } from 'react-redux';

import showNotification from 'store/notifications/actions/show';

const HeaderContainer = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

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

  const triggerDropdown = useRef(null);

  const handleDropdown = useCallback(
    ({ target }) => {
      if (target !== triggerDropdown.current) {
        setDropdownVisible(false);
        return;
      }

      if (!dropdownVisible) {
        setDropdownVisible(!dropdownVisible);
      } else {
        setDropdownVisible(!dropdownVisible);
      }
    },
    [dropdownVisible]
  );

  useEffect(() => {
    document.addEventListener('click', handleDropdown);

    return () => {
      document.removeEventListener('click', handleDropdown);
    };
  }, [dropdownVisible, handleDropdown]);

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
      dropdownVisible={dropdownVisible}
      triggerDropdown={triggerDropdown}
      pages={pages}
    />
  );
};

export default HeaderContainer;
