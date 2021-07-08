import React from 'react';

import style from '../../styles/modules/page-wrap.module.scss';
import Header from '../header/header';

const mainWrap = ({ children }) => (
  <>
    <Header />
    <div className={style.contantWrap}>{children}</div>
  </>
);

export default mainWrap;
