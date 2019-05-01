import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { Alert } from 'reactstrap';
import { Query } from 'react-apollo';
import Repository from '../components/Repository';
import Loader from '../components/Loader';
import ErrorField from '../components/ErrorField';
import { SEARCH_QUERY_REPOS } from '../apollo/user';

class RepositoriesContainer extends PureComponent {
  render() {
    const { username } = this.props;
    return (
      <Query
        query={SEARCH_QUERY_REPOS}
        variables={{
          login: username,
        }}>
        {({ loading, error, data, fetchMore }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorField error={error} />;
          if (!data) {
            return null;
          }
          const repositories = data.user.repositories.nodes;
          return (
            <div>
              <Alert className="text-center mt-1" color="secondary">
                {data.user.repositories.nodes.length === 0
                  ? `${username} has no repositories`
                  : `user ${username} repositories:`}
              </Alert>
              <div className="repositories-list-container">
                <InfiniteScroll
                  pageStart={0}
                  initialLoad={false}
                  loadMore={() => {
                    fetchMore({
                      variables: {
                        after: data.user.repositories.pageInfo.endCursor,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev;
                        const user = {
                          user: {
                            ...prev.user,
                            repositories: {
                              ...prev.user.repositories,
                              ...fetchMoreResult.user.repositories,
                              nodes: [
                                ...prev.user.repositories.nodes,
                                ...fetchMoreResult.user.repositories.nodes,
                              ],
                            },
                          },
                        };
                        return user;
                      },
                    });
                  }}
                  hasMore={data.user.repositories.pageInfo.hasNextPage}
                  loader={<Loader key="messages" />}>
                  {repositories.map((repository) => (
                    <Repository key={repository.id} repository={repository} />
                  ))}
                </InfiniteScroll>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

RepositoriesContainer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default RepositoriesContainer;
