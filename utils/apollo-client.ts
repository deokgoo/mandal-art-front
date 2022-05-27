import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

const graphQLServer = process.env.NEXT_PUBLIC_GRAPHQL_SERVER;

const client = new ApolloClient({
  uri: graphQLServer,
  cache: new InMemoryCache()
});

export default client
