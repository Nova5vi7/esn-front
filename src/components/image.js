import Image from 'next/image';
import React from 'react';

const Img = ({image}) => (
    <Image src='/images/user-plug.png' alt="User" width={223} height={223}/>
);

export default Img;
