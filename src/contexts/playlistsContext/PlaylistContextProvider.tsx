import { createContext, useState } from 'react';
import fetcher from '../fetcher';

type Props = {
  children?: JSX.Element
}

// interface PlaylistContextInterface {
//   playlist: {
//     _id: string,
//     name: string,
//     songs: []
//   }
// }

interface SongProps {
  name: string,
  videoId: string,
  duration: number,
  imgUrl: string
}
  
export const PlaylistContext = createContext<any | null>(null);

export const PlaylistProvider = ({ children }: Props) => {
  const [currentSong, setCurrentSong] = useState<SongProps[]>([]);
  const [playlists, setPlaylists] = useState<Array<any>>();
  const [errorMsg, setErrorMsg] = useState(false);

  const getUserPlaylists = async (userId: string) => {
    const requestBody = {
      query: `query {
        getUserPlaylists(_id: "${userId}"){
          myPlaylists {
            _id
            name
          }
        }
      }
    `
    }

    const response = await fetcher(requestBody);
    if (!response.data) {
      setErrorMsg(true);
    } else {
      setPlaylists(response.data.getUserPlaylists.myPlaylists);
      setErrorMsg(false);
    }
  }
  
  const values = {
      currentSong,
      setCurrentSong,
      getUserPlaylists,
      playlists,
      errorMsg
    }
  
  return (
    <PlaylistContext.Provider value={values}>
       { children }
    </PlaylistContext.Provider>
  );
}