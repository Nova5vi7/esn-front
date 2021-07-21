import Image from 'next/image';
import React from 'react';

import {
  AuthWrap,
  BlockLeft,
  BlockRight,
  LogoWrap,
  Text
} from './layouts-style';

const Auth = ({ children }) => (
  <AuthWrap>
    <BlockLeft>
      <LogoWrap>
        <div>
          <Image
            src="/images/form-logo.png"
            alt="Logo"
            width={284}
            height={284}
          />
        </div>
        <Text>PLATFORM</Text>
      </LogoWrap>
    </BlockLeft>
    <BlockRight>{children}</BlockRight>
  </AuthWrap>
);

export default Auth;
