import Head from 'next/head';
import React from 'react';
import { MenuItem, MenuWrapper } from '../modules/components/menu';
import Link from '../modules/components/text/link';

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
  <div className="container">
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
  </div>
);
export default Home;
