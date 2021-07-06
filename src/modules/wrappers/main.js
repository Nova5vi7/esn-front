import React from 'react';

import Header from '../components/header/header';
import style from '../../styles/modules/page-wrap.module.scss';

const mainWrap = ({ children }) => (
  <>
    <Header />
    <div className={style.contantWrap}>{children}</div>
  </>
);

export default mainWrap;
