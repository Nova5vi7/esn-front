import PropTypes from 'prop-types';
import React from 'react';

import UserAvatar from './user-avatar-component';

const userAvatarContainer = ({ src, alt, type }) => (
  <UserAvatar src={src} alt={alt} type={type} />
);

userAvatarContainer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string
};

export default userAvatarContainer;
