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


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// const PlaylistRowItem = ({ song }: any) => {

  const PlaylistRowItem = ({ song, playlistId, index, handlePrintOutSongs }: any) => {
    const { setCurrentSong, removeSongFromPlaylist } = useContext(PlaylistContext);
  
  const printDuration = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

    const imgSrc = song.image ? song.image : "https://i.postimg.cc/nVmnQDCz/analyze-sound-wave-music-512-362.png";
    
    const handleDeleteSong = async (index: number) => {
      console.log(index)
      await removeSongFromPlaylist(index, playlistId);
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