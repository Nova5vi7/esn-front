import React from 'react';

import { Message } from './component-style';
import { Text } from '../components/text';

const UserActivation = ({ tokenValid, captions }) => (
  <Message>
    <Text>{tokenValid ? captions.validMessage : captions.invalidMessage}</Text>
  </Message>
);

export default UserActivation;
