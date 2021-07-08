import Link from 'next/link';
import React from 'react';

const LinkComponent = ({ children, ...rest }) => (
  <Link {...rest}>
    <a>{children}</a>
  </Link>
);

export default LinkComponent;
