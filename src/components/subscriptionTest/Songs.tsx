import React, { useEffect }  from "react";
import { useQuery, useSubscription, gql } from '@apollo/client';

import ChangeTitle from './ChangeTitle'

type Song = {
  songId: number,
  title: string,
  djRoomId: number
}

const ALL_SONGS = gql`
query {
    songs {
      songId
      title
      djRoomId
    }
  }
`;

const NEW_SONGS_SUBSCRIPTION = gql`
  subscription {
    songTitleChanged {
      songId
      title
      djRoomId
    }
  }
  `;
  
  const Songs: React.FC = () =>  {
    const { loading, error, data, subscribeToMore } = useQuery(ALL_SONGS);

    subscribeToMore({
      document: NEW_SONGS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if(!subscriptionData) return prev;
        const newSong = subscriptionData.data.songTitleChanged;
        const updatedSongIndex = prev.songs.findIndex(
          ({songId}: Song) => songId === newSong.songId
        );

        const clonedArray = prev.songs.slice() //make a copy of an array
        clonedArray[updatedSongIndex] = newSong; 
        
        return {songs: clonedArray}
      },
    });
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error...</p>;

  return (
    <>
    {data.songs.map((song: Song) => (
        <div key={song.songId}>
          <h3>{song.title}</h3>
          <p> djRoomId: {song.djRoomId}</p>
          <ChangeTitle song={song} />
        </div>
      ))}
    </>
  );
}

export default Songs;