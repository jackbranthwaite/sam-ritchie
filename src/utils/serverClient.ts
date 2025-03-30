import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  HttpOptions,
} from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

loadDevMessages();
loadErrorMessages();

export const { getClient } = registerApolloClient(() => {
  const headers: HttpOptions['headers'] = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
  };
  headers['X-Environment'] = process.env.NEXT_PUBLIC_DATO_ENVIRONMENT
    ? process.env.NEXT_PUBLIC_DATO_ENVIRONMENT
    : 'main';

  return new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
    link: new HttpLink({
      uri: 'https://graphql.datocms.com/',
      headers,
      fetchOptions: { cache: undefined },
    }),
  });
});
