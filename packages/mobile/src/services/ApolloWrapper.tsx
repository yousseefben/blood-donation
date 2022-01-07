import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
} from '@apollo/client';
import {useUser} from '_context/userContext';
import {onError} from '@apollo/client/link/error';
import {TYPE_ENUM, useAlert} from '_context/alertContext';
import {CONFIG} from '_config/current';

const ApolloWrapper = ({children}) => {
  const {state} = useUser();
  const alert = useAlert();

  const linkError = onError(({graphQLErrors, networkError}) => {
    alert('Describe error here', TYPE_ENUM.error);
    if (graphQLErrors) {
      graphQLErrors.map(({message, locations, path}) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
  const link = createHttpLink({
    uri: `${CONFIG.API_URL}/graphql`,
    headers: {
      Authorization: `Bearer ${state.jwt}`,
    },
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([linkError, link]),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
