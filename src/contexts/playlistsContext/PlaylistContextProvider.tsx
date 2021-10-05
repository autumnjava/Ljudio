import { createContext, useEffect, useState } from 'react';
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
  title: string,
  videoId: string,
  duration: number,
  imgUrl: string
}
  
export const PlaylistContext = createContext<any | null>(null);

export const PlaylistProvider = ({ children }: Props) => {
  const [currentSong, setCurrentSong] = useState<SongProps[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [playlists, setPlaylists] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [content, setContent] = useState<any>('');
  const [artistContent, setArtistContent] = useState<any>('');

  const handleSearch = (searchWord: string) => { 
    fetch('https://yt-music-api.herokuapp.com/api/yt/videos/' + searchWord)
      .then(response => response.json())
      .then(data => setContent(data.content.map((song: any) => {
        return {
          title: song.name,
          videoId: song.videoId,
          duration: song.duration,
          imgUrl: song.thumbnails.url
        }
      })));
  }

  const handleArtistSearch = (artistName: string) => {
    fetch('https://yt-music-api.herokuapp.com/api/yt/artists/' + artistName)
      .then(response => response.json())
      .then(data => setArtistContent(data.content[0]) 
    )
    console.log(artistContent?.name , 'wtf?')
    
  };
  
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
      query: `mutation {
        removePlaylist(_id: "${playlistId}", userId: "${userId}"){
          _id
          name
        }
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


  const createPlaylist = async (name: string, userId: string) => {
    const requestBody = {
      query: ` mutation {
        createPlaylist(name: "${name}", userId: "${userId}"){
          _id
          name
        }
      }`
    }


    const response = await fetcher(requestBody);
    
    if (!response.data) {
      setErrorMsg(true);
    } else {
      getUserPlaylists(userId);
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
            _id
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
      setPlaylist(response.data.getSongsFromPlaylist)
    }
  }

  const addSongToPlaylist = async (playlistId: string, song: SongProps) => {
    const requestBody = {
      query: `mutation{
        addSongToPlaylist(
          _id:"${playlistId}",
          input:
            {title: "${song.title}",
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
  
    const removeSongFromPlaylist = async (index: number, playlistId: string) => {
      const requestBody = {
        query: `mutation{removeSongFromPlaylist(index: ${index}, playlistId:"${playlistId}")
        {
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
      }
    }
  
  const values = {
      handleSearch,
      handleArtistSearch,
      content,
      artistContent,
      createPlaylist,
      deletePlaylist,
      currentSong,
      setCurrentSong,
      getUserPlaylists,
      getSongsFromPlaylist,
      addSongToPlaylist,
      removeSongFromPlaylist,
      playlists,
      playlist,
      errorMsg,
      currentSongIndex,
      setCurrentSongIndex
  }
  
  return (
    <PlaylistContext.Provider value={values}>
       { children }
    </PlaylistContext.Provider>
  );
}