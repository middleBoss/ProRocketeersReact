import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import UserProfile from '../components/UserProfile';
import Loader from '../components/Loader';
import ErrorField from '../components/ErrorField';
import { SEARCH_QUERY_USER } from '../apollo/user';

class UserProfileContainer extends PureComponent {
  render() {
    const { username } = this.props;
    return (
      <Query
        query={SEARCH_QUERY_USER}
        variables={{
          login: username,
        }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;

          if (error) return <ErrorField error={error} />;
          if (!data) {
            return null;
          }
          return <div>{!loading && <UserProfile user={data.user} />}</div>;
        }}
      </Query>
    );
  }
}

UserProfileContainer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserProfileContainer;
