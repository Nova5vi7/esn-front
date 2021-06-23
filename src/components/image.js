import Image from 'next/image';
import React from 'react';

const Img = ({ myImage }) => (
  <Image src={myImage} alt="User" width={223} height={223} />
);

export default Img();
