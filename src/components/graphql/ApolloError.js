import React from 'react';

import ErrorScreen from '../shared/ErrorScreen';

const ApolloError = ({ error, handleClick }) => {
  const { graphQLErrors, networkError } = error;
  const errors = [];

  if (networkError) {
    errors.push(networkError);
  }

  if (graphQLErrors) {
    errors.push(...graphQLErrors.map(({ message }) => message));
  }

  return (
    <ErrorScreen
      message="Sorry, an error has occured"
      errors={errors}
      handleClick={handleClick}
    />
  );
};

export default ApolloError;
