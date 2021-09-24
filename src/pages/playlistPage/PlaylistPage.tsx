import { StyledPLTitle } from "./StyledPlaylistPage";
import { useParams } from "react-router";
import PlaylistRowItem from "../../components/playlistRowItem/PlaylistRowItem";
const PlaylistPage = () => {

  const { id }: any = useParams();
  
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


      <StyledPLTitle>My Playlist 1</StyledPLTitle>
      <PlaylistRowItem/>
    </>
  )
}

export default PlaylistPage;