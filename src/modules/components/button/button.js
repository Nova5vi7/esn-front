import PropTypes from 'prop-types';
import React from 'react';

import { Button } from './button-style';

const ButtonComponent = ({
  children,
  onClick,
  btnType,
  disabled,
  type,
  active
}) => (
  <Button
    btnType={btnType}
    onClick={onClick}
    disabled={disabled}
    type={type}
    active={active}
  >
    {children}
  </Button>
);

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  btnType: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit'])
};

ButtonComponent.defaultProps = {
  btnType: 'default',
  disabled: false,
  type: 'button'
};

export default ButtonComponent;
