import { createContext, useState } from 'react';

type Props = {
  children?: JSX.Element
}

interface Values {
  currentSong: any;
  setCurrentSong: React.Dispatch<React.SetStateAction<any>>
}

interface SongProps {
  name: string,
  videoId: string,
  duration: number,
  imgUrl: string
}

export const PlaylistContext = createContext<Values | null>(null);

export const PlaylistProvider = ({ children }: Props) => {
  
  const [currentSong, setCurrentSong] = useState<SongProps[]>([]);

  const values = {
    currentSong,
    setCurrentSong
  }

  return (
    <PlaylistContext.Provider value={values}>
       { children }
    </PlaylistContext.Provider>
  );
}