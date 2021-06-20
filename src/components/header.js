import Image from 'next/image';
import React from 'react';

import style from '../styles/modules/header.module.scss';
import Link from './link';

const header = () => (
  <div className={style.header}>
    <div className="container">
      <div className={style.header__wrap}>
        <div className={style.header__logoWrap}>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={79} height={79} />
          </Link>
        </div>
        <div className={style.header__navWrap}></div>
      </div>
    </div>
  </div>
);

export default header;
