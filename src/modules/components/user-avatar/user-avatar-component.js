import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import { UserAvatarWrap } from './style-component';

const userAvatarComponent = ({ src, alt, type, id }) => (
  <UserAvatarWrap type={type} id={id}>
    <Image src={src} alt={alt} layout="fill" />
  </UserAvatarWrap>
);

userAvatarComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string
};

export default userAvatarComponent;
