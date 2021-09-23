import { StyledTitle } from "./StyledMyPlaylistPage";
import {PlaylistContext} from '../../contexts/playlistsContext/PlaylistContextProvider'
import { useContext, useEffect  } from 'react';

const MyPlaylistsPage = () => {
  const { playlists, getUserPlaylists } = useContext(PlaylistContext)


  useEffect(() => {
    myPlaylists();
  }, [!playlists]);


  const myPlaylists = async () => {
    const userId = "614c45add183eb4b3d148816";
    await getUserPlaylists(userId);

    console.log('my playlists', playlists);
  }

  
  return (
    <>
      <StyledTitle>MyPlaylist</StyledTitle>
      
    </>
  )
}

export default MyPlaylistsPage;