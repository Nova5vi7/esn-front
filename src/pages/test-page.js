import React from 'react';

import Wrap from '@/modules/layouts/main';
import withAuth from '../modules/layouts/hoc/with-auth';

const TestPage = () => (
  <Wrap>
    <h1>Hello</h1>
  </Wrap>
);

export default withAuth(TestPage);