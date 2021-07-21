import React from 'react';

import { Text } from './text-style';

const TextComponent = ({ children, display }) => (
  <Text display={display}>{children}</Text>
);

export default TextComponent;
