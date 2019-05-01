import gql from 'graphql-tag';

export const SEARCH_QUERY_USER = gql`
  query($login: String!) {
    user(login: $login) {
      avatarUrl
      login
      name
      bio
    }
  }
`;

export const SEARCH_QUERY_REPOS = gql`
  query($login: String!, $after: String) {
    user(login: $login) {
      repositories(after: $after, first: 10) {
        totalCount
        nodes {
          id
          name
          description
          primaryLanguage {
            name
            color
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalDiskUsage
      }
    }
  }
`;

export const SEARCH_QUERY_FOLLOWERS = gql`
  query($login: String!, $after: String) {
    user(login: $login) {
      followers(after: $after, first: 10) {
        totalCount
        nodes {
          id
          avatarUrl
          name
          login
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;
