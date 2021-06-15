import React from 'react';

import styles from '../styles/modules/button.module.scss';

const Button = ({ children, className, handleSubmit, valid, dirty }) => {
  return (
    <div className={styles.btn_wrap}>
      <button
        className={className}
        onClick={handleSubmit}
        disabled={!valid && !dirty}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
