import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { Alert } from 'reactstrap';
import { Query } from 'react-apollo';
import Follower from '../components/Follower';
import Loader from '../components/Loader';
import ErrorField from '../components/ErrorField';
import { SEARCH_QUERY_FOLLOWERS } from '../apollo/user';

class FollowersContainer extends PureComponent {
  render() {
    const { username } = this.props;
    return (
      <Query
        query={SEARCH_QUERY_FOLLOWERS}
        variables={{
          login: username,
        }}>
        {({ loading, error, data, fetchMore }) => {
          if (loading) return <Loader />;

          if (error) return <ErrorField error={error} />;
          if (!data) {
            return null;
          }
          const followers = data.user.followers.nodes;
          return (
            <div>
              <Alert className="text-center mt-1" color="secondary">
                {data.user.followers.nodes.length === 0
                  ? `${username} has no followers`
                  : `user ${username} followers:`}
              </Alert>
              <InfiniteScroll
                pageStart={0}
                initialLoad={false}
                loadMore={() => {
                  fetchMore({
                    variables: {
                      after: data.user.followers.pageInfo.endCursor,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      const user = {
                        user: {
                          ...prev.user,
                          followers: {
                            ...prev.user.followers,
                            ...fetchMoreResult.user.followers,
                            nodes: [
                              ...prev.user.followers.nodes,
                              ...fetchMoreResult.user.followers.nodes,
                            ],
                          },
                        },
                      };
                      return user;
                    },
                  });
                }}
                hasMore={data.user.followers.pageInfo.hasNextPage}
                loader={<Loader key="messages" />}>
                {followers.map((follower) => (
                  <Follower key={follower.id} follower={follower} />
                ))}
              </InfiniteScroll>
            </div>
          );
        }}
      </Query>
    );
  }
}

FollowersContainer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default FollowersContainer;
