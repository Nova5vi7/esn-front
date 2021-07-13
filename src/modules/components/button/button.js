import React from 'react';

import style from '../../../styles/modules/button.module.scss';

const Button = ({ children, onClick, valid, dirty, loading }) => (
  <button
    className={style.button_submit}
    onClick={onClick}
    disabled={!valid && !dirty && loading}
    type="submit"
  >
    {children}
  </button>
);

export default Button;
