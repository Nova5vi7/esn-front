import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import { UserAvatarWrap } from './avatar-styles';

const UserAvatarComponent = ({ src, alt, type }) => (
  <UserAvatarWrap type={type}>
    <Image src={src} alt={alt} layout="fill" />
  </UserAvatarWrap>
);

UserAvatarComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string
};

export default UserAvatarComponent;
