import { StyledTitle } from "./StyledMyPlaylistPage";
import {PlaylistContext} from '../../contexts/playlistsContext/PlaylistContextProvider'
import { useContext, useEffect } from 'react';
import { Button } from '@mui/material';

const MyPlaylistsPage = () => {
  const { playlists, getUserPlaylists, deletePlaylist } = useContext(PlaylistContext)


  useEffect(() => {
    myPlaylists();
  }, [!playlists]);


  const myPlaylists = async () => {
    const userId = "614c45add183eb4b3d148816";
    await getUserPlaylists(userId);

    console.log('my playlists', playlists);
  }

  const removePlaylist = async () => {
    console.log('I have clicked on delete playlist button')
    // const userId = "614c45add183eb4b3d148816";
    // const playlistId = "614c49fc2495df67d6729842";
    // await deletePlaylist(playlistId, userId);
  }

  
  return (
    <>
      <StyledTitle>MyPlaylist</StyledTitle>
      <Button variant="contained" onClick={() => removePlaylist}>Remove playlist</Button>
      
    </>
  )
}

export default MyPlaylistsPage;