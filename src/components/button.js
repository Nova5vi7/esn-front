import React from 'react';

import style from '../styles/modules/button.module.scss';

const Button = ({children, onClick, valid, dirty}) => (
    <button
        className={style.button_submit}
        onClick={onClick}
        disabled={!valid && !dirty}
        type="submit"
    >
        {children}
    </button>
);

export default Button;
