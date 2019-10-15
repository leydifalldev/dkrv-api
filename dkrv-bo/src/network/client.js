import ApolloClient, { InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache();
export const client = new ApolloClient({
  uri: 'http://localhost:9000/api/graphql',
  cache,
});

