import { StyledTitle } from "./StyledPlaylistPage";
import { useContext, useEffect } from 'react';
import {PlaylistContext} from '../../contexts/playlistsContext/PlaylistContextProvider'


const PlaylistPage = () => {
  const { playlist, getSongsFromPlaylist } = useContext(PlaylistContext)

  useEffect(() => {
    playlistSongs();
  }, [!playlist]);
    
    const playlistSongs = async () => {
      const playlistId = "614b47f372dc1bfaa3260bfe";
      await getSongsFromPlaylist(playlistId);
      
      console.log('playlist songs', playlist);
    }
    
  return (
    <>
      <StyledTitle>Playlist</StyledTitle>
    </>
  )
}

export default PlaylistPage;