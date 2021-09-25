import Head from 'next/head';
import React from 'react';
import { Container } from 'style/grid/index';

import Wrap from '@/modules/layouts/main';

const Home = () => (
  <Wrap>
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Container>
  </Wrap>
);
export default Home;
