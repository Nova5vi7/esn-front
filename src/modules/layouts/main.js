import React from 'react';

import Header from '../header/header';
import { PageWrap } from './layouts-style';

const mainWrap = ({ children }) => (
  <>
    <Header />
    <PageWrap>{children}</PageWrap>
  </>
);

export default mainWrap;
