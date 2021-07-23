import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './text-style';

const TextComponent = ({ children, scheme }) => (
  <Text scheme={scheme}>{children}</Text>
);

TextComponent.propTypes = {
  scheme: PropTypes.oneOf(['light', 'dark'])
};

TextComponent.defaultProps = {
  scheme: 'light'
};

export default TextComponent;
