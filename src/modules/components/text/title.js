import React from 'react';

import { H2 } from './text-style';

const Title = ({ children, scheme }) => <H2 scheme={scheme}>{children}</H2>;

export default Title;
