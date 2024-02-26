import React from 'react';
import { useGithubUser } from '../api/github.api';

const ReactQueryExample = () => {
    // Access data and other props provided by react query
  const { isLoading, error, data, isFetching } = useGithubUser();

  console.log(isLoading, error, data, isFetching);

  if (isLoading) return 'Loading...';
  if (error) console.log('An error occurred while fetching the user data ', error);

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.bio}</p>
    </div>
  );
};

export default ReactQueryExample;