import React from 'react';
import PropTypes from 'prop-types';
import InformationValidation from './InformationValidation';

const UserProfile = (props) => {
  const { user } = props;
  return (
    <div className="profile d-flex flex-column justify-content-center align-items-center">
      <img className="user-photo" alt="user avatar" src={user.avatarUrl} />
      <h2 className="text-center user-name">Name: {InformationValidation(user.name)}</h2>
      <h3 className="text-center username">Username: {InformationValidation(user.login)}</h3>
      <p className="text-center profile-bio">bio: {InformationValidation(user.bio)}</p>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserProfile;
