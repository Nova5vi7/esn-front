import React from 'react';

import style from '../../../styles/modules/title.module.scss';

const Title = ({ children }) => <h1 className={style.title}>{children}</h1>;

export default Title;
