import React, { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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

  const handleDropdown = e => {
    const target = e.target;

    if (!target.closest('#toggleDropdown')) {
      setDropdownVisible(false);
      return;
    }

    if (!dropdownVisible) {
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
    }
  };

  const pages = [
    {
      path: '/verification',
      name: 'Verification'
    },
    {
      path: '/sign-in',
      name: 'Sign In'
    },
    {
      path: '/sign-up',
      name: 'Sign Up'
    }
  ];

  const dropdownItem = [
    {
      func: () => handleLogout(),
      text: 'Logout'
    },
    {
      func: () => testNotification(),
      text: 'Notification'
    }
  ];

  useEffect(() => {
    document.addEventListener('click', handleDropdown);

    return () => {
      document.removeEventListener('click', handleDropdown);
    };
  }, [dropdownVisible]);

  return (
    <HeaderComponent
      dropdownItem={dropdownItem}
      handleDropdown={handleDropdown}
      dropdownVisible={dropdownVisible}
      pages={pages}
    />
  );
};

export default HeaderContainer;
