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
  const [playlist, setPlaylist] = useState<Array<any>>();

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

  const getSongsFromPlaylist = async (playlistId: string) => {
    const requestBody = {
      query: ` query {
        getSongsFromPlaylist(_id: "${playlistId}"){
          _id
          name
          songs {
            title
            image
            duration
            videoId
          }
        }
      }
      `
    }

    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      setPlaylist(response.data.getSongsFromPlaylist.songs)
    }
  }

  const addSongToPlaylist = async (playlistId: string, song: SongProps) => {
    const requestBody = {
      query: `mutation{
        addSongToPlaylist(
          _id:"${playlistId}",
          input:
            {title: "${song.name}",
            image:"${song.imgUrl}",
            duration: ${song.duration},
            videoId:"${song.videoId}"
        })
          {
            name
          }
        }
      `
    }

    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      // if you want data, it will return what playlist a song has been added to
    }
  }
  
    const removeSongFromPlaylist = async (songId: string, playlistId: string) => {
      const requestBody = {
        query: `mutation{
          removeSongFromPlaylist(
            songId: "${songId}",
            playlistId:"${playlistId}"
          ){
            _id
            name
          }
        }`
      }
      
      const response = await fetcher(requestBody);
      if (!response) {
        setErrorMsg(true)
      } else {
        setErrorMsg(false)
        console.log(response.data)
      }
    }
  
  const values = {
      currentSong,
      setCurrentSong,
      getUserPlaylists,
      getSongsFromPlaylist,
      addSongToPlaylist,
      removeSongFromPlaylist,
      playlists,
      playlist,
      errorMsg
  }
  
  return (
    <PlaylistContext.Provider value={values}>
       { children }
    </PlaylistContext.Provider>
  );
}