import Image from 'next/image';
import React from 'react';

import { Header } from './header-style';
import Link from '../components/text/link';

const HeaderContainer = () => (
  <Header>
    <div className="container">
      <div>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={79} height={79} />
        </Link>
      </div>
    </div>
  </Header>
);

export default HeaderContainer;
