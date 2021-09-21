import { useContext } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import {
  StyledWrapper,
  StyledPlayerWrapper,
  StyledSongTitle
} from './StyledMiniPlayer'
import BottomNavigation from '@mui/material/BottomNavigation';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';


const MiniPlayer = () => {

  const songs = useContext(PlaylistContext);

  return (
    <>
      <StyledWrapper>
        <BottomNavigation style={{
          background: 'black',
          opacity: '80%',
          display: 'grid'
        }} sx={{ width: '100vw', height: '5rem' }}>
          {songs?.currentSong && <StyledSongTitle>{songs.currentSong.snippet.title}</StyledSongTitle>}
          <StyledPlayerWrapper>
              <SkipPreviousIcon style={{
                alignSelf: 'center',
                justifySelf: 'center',
                fontSize: '2.5rem',
                color: 'white'
              }} />
              <PlayArrowIcon style={{
                alignSelf: 'center',
                 justifySelf: 'center',
                fontSize: '3.5rem',
                color: 'white'
              }} />
              <SkipNextIcon style={{
                alignSelf: 'center',
                justifySelf: 'center',
                fontSize: '2.5rem',
                color: 'white'
              }} />
            </StyledPlayerWrapper>
        </BottomNavigation>
      </StyledWrapper>
    </>
  )
}

export default MiniPlayer;