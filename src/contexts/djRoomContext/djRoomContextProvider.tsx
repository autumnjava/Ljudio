import { createContext, useState } from 'react';
import fetcher from '../fetcher';

type Props = {
  children?: JSX.Element
}


type DjRoomSong = {
  djRoomId: string,
  currentSong: string,
  pos: number
}

export const DjRoomContext = createContext<any>(null);

export const DjRoomProvider: React.FC<Props> = ({ children }: Props) => {

  const updCurrentSong = async (song: DjRoomSong) => {
    const requestBody = {
      query: `mutation {
        changeDjRoomSongTimePosition(
          input: { djRoomId: "${song.djRoomId}", currentSong: "${song.currentSong}", pos: ${song.pos} }
        )
      }
      `
  }

  const response = await fetcher(requestBody);
  if (!response.data) {
    return;
  }
  }
  
   const values = {
    updCurrentSong
  }

  return (
    <DjRoomContext.Provider value={values}>
       { children }
    </DjRoomContext.Provider>
  );
}