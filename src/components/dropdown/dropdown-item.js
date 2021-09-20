import React from 'react';
import { DropdownItem } from './dropdown-styles';
import PropTypes from 'prop-types';

const DropdownItemComponent = ({ children, onClick }) => (
  <DropdownItem onClick={onClick}>{children}</DropdownItem>
);

DropdownItemComponent.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default DropdownItemComponent;
