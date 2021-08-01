import React, { useCallback, useEffect, useRef } from 'react';
import { Dropdown } from './dropdown-styles';
import PropTypes from 'prop-types';

const DropdownComponent = ({ children, showDropdown, setShowDropdown }) => {
  const dropdownRef = useRef(null);

  const hideDropdown = useCallback(
    ({ target }) => {
      if (target == dropdownRef.current) {
        return;
      }

      setShowDropdown(!showDropdown);
    },
    [showDropdown, setShowDropdown]
  );

  useEffect(() => {
    document.addEventListener('click', hideDropdown);

    return () => {
      document.removeEventListener('click', hideDropdown);
    };
  }, [showDropdown, hideDropdown]);

  return <Dropdown ref={dropdownRef}>{children}</Dropdown>;
};

DropdownComponent.propTypes = {
  showDropdown: PropTypes.bool,
  setShowDropdown: PropTypes.func
};

export default DropdownComponent;
