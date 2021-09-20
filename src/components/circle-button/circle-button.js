import React from 'react';

import { Button } from './button-style';

const circleButton = ({ children, onClick }) => (
  <Button onClick={onClick} type="button">
    {children}
  </Button>
);

export default circleButton;
