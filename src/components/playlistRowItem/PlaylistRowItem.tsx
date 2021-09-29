import {
  StyledRowWrapper,
  StyledSongImage,
  StyledRow,
  StyledSongTitle,
  StyledDuration,
  StyledRemoveWrapper
} from "./StyledPlaylistRowItem";
import DeleteIcon from '@material-ui/icons//Delete';
import { useContext, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// const PlaylistRowItem = ({ song }: any) => {

  const PlaylistRowItem = ({ song, playlistId }: any) => {
    const { setCurrentSong, removeSongFromPlaylist } = useContext(PlaylistContext);
  
  const printDuration = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

    const imgSrc = song.image ? song.image : "https://i.postimg.cc/nVmnQDCz/analyze-sound-wave-music-512-362.png";
    
    const handleDeleteSong = async () => {
      await removeSongFromPlaylist(song._id, playlistId);
    }


  return (
    <StyledRowWrapper>
      {console.log(song)}
        <StyledRow onClick={() => setCurrentSong([song])}>
        <StyledSongImage src={imgSrc} key={song.videoId} />
        <StyledSongTitle>{song.title}</StyledSongTitle>
        <StyledDuration>{printDuration(song.duration)}</StyledDuration>
        <StyledRemoveWrapper><DeleteIcon onClick={handleDeleteSong} /></StyledRemoveWrapper>
        </StyledRow>
    </StyledRowWrapper>
  );
}

export default PlaylistRowItem;