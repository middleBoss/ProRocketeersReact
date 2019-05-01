import ApolloClient from 'apollo-boost';
import API_HOST from '../config/index';

const token = 'd19ea4e28444e51534a0570d8e46a277ebbcd3cb';
const client = new ApolloClient({
  uri: API_HOST,
  headers: {
    authorization: token ? `Bearer ${token}` : '',
  },
});

export default client;
