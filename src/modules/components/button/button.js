import React from 'react';
import PropTypes from 'prop-types';

import style from '../../../styles/modules/button.module.scss';

const Button = ({ children, onClick, disabled, type, TEST_PROPS }) => (
  <button
    className={style.button_submit}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children}
  </button>
);

Button.propTypes = {
  TEST_PROPS: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit'])
};

Button.defaultProps = {
  disabled: false,
  type: 'button'
};

export default Button;
