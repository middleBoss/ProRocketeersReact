import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Follower = (props) => {
  const { follower } = props;
  return (
    <Link className="follower" to={`/${follower.login}`}>
      <img className="follower-avatar" alt="follower avatar" src={follower.avatarUrl} />
      <span>{follower.name}</span>
    </Link>
  );
};

Follower.propTypes = {
  follower: PropTypes.object,
};

Follower.defaultProps = {
  follower: {},
};

export default Follower;
