import { useQuery as useApolloQuery } from '@apollo/client';
import { getMovie } from '../services/movie-api-example';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { loading, data } = useApolloQuery(getMovie);
  
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
