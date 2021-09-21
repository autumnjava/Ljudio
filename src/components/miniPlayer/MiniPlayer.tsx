import { useContext, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import {
  StyledWrapper,
  StyledPlayerWrapper,
  StyledSongTitle
} from './StyledMiniPlayer'
import BottomNavigation from '@mui/material/BottomNavigation';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';


const MiniPlayer = () => {

  const [play, setPlay] = useState(true);
  const songs = useContext(PlaylistContext);

  const handlePlay = () => {
    setPlay(!play)
  }

  const handlePaus = () => {
    setPlay(!play)
  }


  const renderIcons = () => (
    <StyledPlayerWrapper>
      <SkipPreviousIcon style={{
        alignSelf: 'center',
        justifySelf: 'center',
        fontSize: '2.5rem',
        color: 'white'
      }} />
     {play ? <PlayArrowIcon style={{
        alignSelf: 'center',
          justifySelf: 'center',
        fontSize: '3.5rem',
        color: 'white'
      }}
      onClick={handlePlay}/>
      :
      <PauseIcon style={{
        alignSelf: 'center',
          justifySelf: 'center',
        fontSize: '3.5rem',
        color: 'white'
        }}
        onClick={handlePaus}/>}
      <SkipNextIcon style={{
        alignSelf: 'center',
        justifySelf: 'center',
        fontSize: '2.5rem',
        color: 'white'
      }} />
    </StyledPlayerWrapper>
  )


  return (
    <>
      <StyledWrapper>
        <BottomNavigation style={{
          background: 'black',
          opacity: '80%',
          display: 'grid'
        }} sx={{ width: '100vw', height: '5rem' }}>
          {songs?.currentSong && <StyledSongTitle>{songs.currentSong.snippet.title}</StyledSongTitle>}
          {renderIcons()}
        </BottomNavigation>
      </StyledWrapper>
    </>
  )
}

export default MiniPlayer;