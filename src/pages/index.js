import { MenuItem, MenuWrapper } from 'modules/components/menu';
import Link from 'modules/components/text/link';
import { Container } from 'style/grid/index';
import Head from 'next/head';
import React from 'react';

const pages = [
  {
    path: '/verification',
    name: 'Verification'
  },
  {
    path: '/sign-in',
    name: 'Sign In'
  },
  {
    path: '/sign-up',
    name: 'Sign Up'
  }
];

const Home = () => (
  <Container>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <MenuWrapper>
        {pages.map(({ path, name }) => (
          <MenuItem key={path}>
            <Link href={path}>{name}</Link>
          </MenuItem>
        ))}
      </MenuWrapper>
    </div>
  </Container>
);
export default Home;
