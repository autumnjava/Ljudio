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

export const PlaylistContext = createContext<any | null>(null);

export const PlaylistProvider = ({ children }: Props) => {
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