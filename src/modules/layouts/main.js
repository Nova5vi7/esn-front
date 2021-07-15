import React from 'react';

import { PageWrap } from './layouts-style';
import Header from '../header/header';

const mainWrap = ({ children }) => (
  <>
    <Header />
    <PageWrap>{children}</PageWrap>
  </>
);

export default mainWrap;
