import { useQuery as useApolloQuery } from '@apollo/client';
import { getMovie } from '../services/movie-api-example';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { loading, data } = useApolloQuery(getMovie);
  const router = useRouter();

  useEffect(() => {
    router.replace('/plan');
  }, [router]);
  
  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <h2>{JSON.stringify(data)}</h2>
      )}
    </div>
  )
}

export default Home
