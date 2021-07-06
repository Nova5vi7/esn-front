import React from 'react';

import style from '../../../styles/modules/circle-button.module.scss';

const circleButton = ({ children, onClick }) => (
  <button onClick={onClick} type="button" className={style.button_label_file}>
    {children}
  </button>
);

export default circleButton;
