import React from 'react';

import { Message } from './component-style';
import { Text } from '../components/text';

const UserActivate = ({ tokenValid, captions }) => (
  <Message>
    <Text>{tokenValid ? captions.invalidMessage : captions.validMessage}</Text>
  </Message>
);

export default UserActivate;
