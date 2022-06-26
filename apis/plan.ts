import { gql } from '@apollo/client';

export const getAllMandals = gql`
  {
    mandals{
      title
      childs
    }
  }
`;
