// server 통신 예제입니다.
import {
  gql,
} from '@apollo/client';

export const getMovie = gql`
  {
    ranking {
      id
      original_title
      poster_path
    }
  }
`;
