import React from 'react';
import { DropdownItem } from './style-component';

const DropdownItemComponent = ({ children, onClick }) => (
  <DropdownItem onClick={onClick}>{children}</DropdownItem>
);

export default DropdownItemComponent;
