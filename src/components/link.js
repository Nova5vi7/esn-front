import React from 'react';
import Link from 'next/link';

const LinkComponent = ({ children, ...rest }) => (
  <Link {...rest}>
    <a>{children}</a>
  </Link>
);

export default LinkComponent;
