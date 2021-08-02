import React from 'react';
import { Dropdown } from './index';
import PropTypes from 'prop-types';

const DropdownContainer = ({ children, showDropdown, setShowDropdown }) => (
  <>
    {showDropdown && (
      <Dropdown setShowDropdown={setShowDropdown} showDropdown={showDropdown}>
        {children}
      </Dropdown>
    )}
  </>
);

DropdownContainer.propTypes = {
  children: PropTypes.node.isRequired,
  showDropdown: PropTypes.bool,
  setShowDropdown: PropTypes.func
};

export default DropdownContainer;
