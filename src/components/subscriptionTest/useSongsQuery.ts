import { useQuery, gql } from '@apollo/client';

export const subscription = gql`
query {
    songs {
      songId
      title
      djRoomId
    }
  }
`;

export default () => useQuery(subscription);