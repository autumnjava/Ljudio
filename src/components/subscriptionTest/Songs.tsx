import React  from "react";

import useSongsQuery from './useSongsQuery';
import useSongSubscription from "./useSongSubscription";

import ChangeTitle from './ChangeTitle'

type Song = {
  songId: number,
  title: string,
  djRoomId: number
}

const Songs: React.FC = () =>  {
  useSongSubscription();
  const { loading, error, data } = useSongsQuery();
  if (loading) return <> loading... </>
  if (error) return <> error... </>

  if (!data || !data.songs) return null;

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