import { useSubscription, gql } from '@apollo/client';

export const subscription = gql`
subscription {
  songTitleChanged {
    songId
    title
    djRoomId
  }
}
`;

export default () => useSubscription(subscription);