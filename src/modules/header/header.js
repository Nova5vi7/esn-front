import Image from 'next/image';
import React from 'react';

import Link from '../components/text/link';
import { Container } from 'style/grid/index';
import { Header } from './header-style';

const HeaderContainer = () => (
  <Header>
    <Container>
      <div>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={79} height={79} />
        </Link>
      </div>
    </Container>
  </Header>
);

export default HeaderContainer;
