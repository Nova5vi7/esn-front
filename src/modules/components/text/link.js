import LinkNext from 'next/link';
import React from 'react';

import { Link } from './text-style';

const LinkComponent = ({ children, ...rest }) => (
  <LinkNext {...rest}>
    <Link>{children}</Link>
  </LinkNext>
);

export default LinkComponent;
