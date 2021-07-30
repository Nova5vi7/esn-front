import React from 'react';
import { Dropdown } from './dropdown-styles';

const DropdownComponent = ({ children }) => (
  <Dropdown id="dropdown">{children}</Dropdown>
);

export default DropdownComponent;
