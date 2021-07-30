import React from 'react';
import { DropdownItem } from './dropdown-styles';

const DropdownItemComponent = ({ children, onClick }) => (
  <DropdownItem onClick={onClick}>{children}</DropdownItem>
);

export default DropdownItemComponent;
