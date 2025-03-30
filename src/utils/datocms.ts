import { ApolloClient, InMemoryCache } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

loadDevMessages();
loadErrorMessages();

export const clientConfig = {
  uri: 'https://graphql.datocms.com/',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    'X-Environment': process.env.NEXT_PUBLIC_DATO_ENVIRONMENT
      ? process.env.NEXT_PUBLIC_DATO_ENVIRONMENT
      : 'main',
  },
  cache: new InMemoryCache(),
};

export const client = new ApolloClient(clientConfig);
