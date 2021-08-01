import { Container } from 'style/grid/index';
import Head from 'next/head';
import Wrap from '@/modules/layouts/main';
import React from 'react';

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
