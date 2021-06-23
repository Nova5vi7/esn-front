import React from 'react';

import style from '../styles/modules/button.module.scss';

const Button = ({ children, handleClick, valid, dirty }) => (
  <div className={style.btn_wrap}>
    <button
      className={style.button_submit}
      onClick={handleClick}
      disabled={!valid && !dirty}
      type="submit"
    >
      {children}
    </button>
  </div>
);

export default Button;
