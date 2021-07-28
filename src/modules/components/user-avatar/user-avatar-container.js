import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from './user-avatar-component';

const userAvatarContainer = ({ src, alt, type, handleDropdown, id }) => {
  return <UserAvatar src={src} alt={alt} type={type} handleDropdown={handleDropdown} id={id}/>;
};

userAvatarContainer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string,
  handleDropdown: PropTypes.func
};

export default userAvatarContainer;
