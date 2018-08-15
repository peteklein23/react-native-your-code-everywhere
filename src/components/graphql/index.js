import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { GRAPHQL_ENDPOINT } from '../../../env';

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT
});

const link = ApolloLink.from([httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
