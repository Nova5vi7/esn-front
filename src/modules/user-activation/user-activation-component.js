import React from 'react';

import { Text } from '@/components/text';

import { Message } from './component-style';

const UserActivation = ({ tokenValid, captions }) => (
  <Message>
    <Text>{tokenValid ? captions.validMessage : captions.invalidMessage}</Text>
  </Message>
);

export default UserActivation;
