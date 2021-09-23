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
  const [playlists, setPlaylists] = useState([]);
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

  const deletePlaylist = async (playlistId: string, userId: string) => {
    const requestBody = {
      query: `mutation
        removePlaylist(_id: ${playlistId}, userId: ${userId}){
          _id
          name
        }
      `
    }
    const response = await fetcher(requestBody);
    if (!response.data) {
      setErrorMsg(true);
    } else {
      getUserPlaylists(userId);
      setErrorMsg(false);
    }
  }
  
  const values = {
      deletePlaylist,
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