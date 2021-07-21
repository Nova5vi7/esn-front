import React from 'react';

import Header from '../header/header';
import { ContentWrap } from './layouts-style';

const mainWrap = ({ children }) => (
  <>
    <Header />
    <ContentWrap>{children}</ContentWrap>
  </>
);

export default mainWrap;
