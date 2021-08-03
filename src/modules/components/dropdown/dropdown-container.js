import React from 'react';
import { Dropdown, DropdownItem } from './index';
import PropTypes from 'prop-types';

const DropdownContainer = ({ items, showDropdown, setShowDropdown }) => (
  <>
    {showDropdown && (
      <Dropdown setShowDropdown={setShowDropdown} showDropdown={showDropdown}>
        {items.map(({ onClick, text }, id) => (
          <DropdownItem onClick={onClick} key={id}>
            {text}
          </DropdownItem>
        ))}
      </Dropdown>
    )}
  </>
);

DropdownContainer.propTypes = {
  items: PropTypes.array.isRequired,
  showDropdown: PropTypes.bool,
  setShowDropdown: PropTypes.func
};

export default DropdownContainer;
