import { ApolloClient, InMemoryCache } from "@apollo/client";

export const initializeClient = () =>
  new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: "http://practice.codebootcamp.co.kr/graphql/",
    cache: new InMemoryCache(),
  });

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: "http://practice.codebootcamp.co.kr/graphql/",
  cache: new InMemoryCache(),
});
