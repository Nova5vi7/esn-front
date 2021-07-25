import PropTypes from 'prop-types';
import React from 'react';

import Header from '../header';
import { ContentWrap } from './layouts-style';

const mainWrap = ({ children }) => (
  <>
    <Header />
    <ContentWrap>{children}</ContentWrap>
  </>
);

mainWrap.propTypes = {
  children: PropTypes.node.isRequired
};

export default mainWrap;
