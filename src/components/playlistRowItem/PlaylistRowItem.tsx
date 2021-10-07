import {
  StyledRowWrapper,
  StyledSongImage,
  StyledRow,
  StyledSongTitle,
  StyledDuration,
  StyledRemoveWrapper
} from "./StyledPlaylistRowItem";
import DeleteIcon from '@material-ui/icons//Delete';
import { useContext } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import { useParams } from "react-router-dom";
import playlistLogo from "../../pages/landingPage/videos/logo-playlist.png"


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// const PlaylistRowItem = ({ song }: any) => {

  const PlaylistRowItem = ({ song, playlistId, index, playlistSongs }: any) => {
    const { setCurrentSong, removeSongFromPlaylist } = useContext(PlaylistContext);
    const { id }: any = useParams();
  
    const printDuration = (millis: number) => {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
    }

      const imgSrc = song.image ? song.image : playlistLogo;
      
      const handleDeleteSong = async (index: number) => {
        const response = await removeSongFromPlaylist(index, playlistId);
        if(response){
          playlistSongs(id);
          
        }
      }


  return (
    <StyledRowWrapper>
        <StyledRow>
        <StyledSongImage onClick={() => setCurrentSong([song])} src={imgSrc} key={song.videoId} />
        <StyledSongTitle onClick={() => setCurrentSong([song])}>{song.title}</StyledSongTitle>
        <StyledDuration>{printDuration(song.duration)}</StyledDuration>
        <StyledRemoveWrapper><DeleteIcon onClick={() => handleDeleteSong(index)} /></StyledRemoveWrapper>
        </StyledRow>
    </StyledRowWrapper>
  );
}

export default PlaylistRowItem;