import {
  StyledRowWrapper,
  StyledSongImage,
  StyledRow,
  StyledSongTitle,
  StyledDuration
} from "./StyledPlaylistRowItem";
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import { useContext } from 'react';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PlaylistRowItem = ({ song }: any) => {

  const { setCurrentSong } = useContext(PlaylistContext);
  
  const printDuration = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

  const imgSrc = song.image ? song.image : "https://i.postimg.cc/nVmnQDCz/analyze-sound-wave-music-512-362.png";

  return (
    <StyledRowWrapper>


      <StyledRow onClick={() => setCurrentSong([song])}>
        <StyledSongImage src={imgSrc} key={song.videoId} />
        <StyledSongTitle>{song.title}</StyledSongTitle>
        <StyledDuration>{printDuration(song.duration)}</StyledDuration>
      </StyledRow>
    </StyledRowWrapper>
  );
}

export default PlaylistRowItem;