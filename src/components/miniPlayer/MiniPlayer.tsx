import { useContext, useEffect, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import YouTube from 'react-youtube';
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
  const [eventYoutube, setEventYoutube] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleStart = (event: any) => {
    setEventYoutube(event)
    event.target.playVideo();
    setPlay(false)
  }

  const handlePlay = () => {
    eventYoutube.target.playVideo();
    setPlay(!play)
  }

  const handlePaus = () => {
    eventYoutube.target.pauseVideo();
    setPlay(!play)
  }

  const handleNextSong = () => {
    if (currentIndex !== songs?.currentSong.length - 1) {
      setCurrentIndex(currentIndex + 1) 
    }
    return;
  }

  const handlePreviousSong = () => {
     if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1) 
    }
    return;
  }

  const opts = {
    height: '0',
    width: '0',
  }

  useEffect(() => {
    if (eventYoutube) {
      handleStart(eventYoutube)
    }
    return;
  }, [songs, currentIndex])

  const renderIcons = () => (
    <StyledPlayerWrapper>
      <SkipPreviousIcon style={{
        alignSelf: 'center',
        justifySelf: 'center',
        fontSize: '2.5rem',
        color: 'white'
      }} onClick={handlePreviousSong}/>
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
      }} onClick={handleNextSong} />
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
          {songs?.currentSong.length && <StyledSongTitle>{songs.currentSong[currentIndex].snippet.title}</StyledSongTitle>}
          {renderIcons()}
          {songs?.currentSong.length &&
            <YouTube
            videoId={songs.currentSong[currentIndex].id.videoId}
            onReady={(e) => handleStart(e)}
            opts={opts}
            />}
        </BottomNavigation>
      </StyledWrapper>
    </>
  )
}

export default MiniPlayer;