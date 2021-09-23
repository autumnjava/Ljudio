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
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

const MiniPlayer = () => {

  const opts = {
    height: '0',
    width: '0',
  }

  const [play, setPlay] = useState(true);
  const songs = useContext(PlaylistContext);
  const [eventYoutube, setEventYoutube] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [expandPlayer, setExpandVideo] = useState<boolean>(false);

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

  const handleExpandPlayer = () => {
    setExpandVideo(true);
    eventYoutube.target.setSize(375, 300);
  }

  const handleMinimizePlayer = () => {
    setExpandVideo(false);
    eventYoutube.target.setSize(0, 0);
  }

  useEffect(() => {
    if (eventYoutube) {
      handleStart(eventYoutube)
    }
    return;
  }, [songs, currentIndex])

  const renderTitle = () => (
    <StyledSongTitle>
      {songs?.currentSong[songs?.currentSong.length === 1 ? 0 : currentIndex].snippet.title}
    </StyledSongTitle>
  )

  const renderIcons = () => (
    <StyledPlayerWrapper>
      <SkipPreviousIcon style={{
        alignSelf: !expandPlayer ? 'center' : 'end',
        justifySelf: 'center',
        fontSize: !expandPlayer ? '2.5rem' : '3.5rem',
        color: 'white'
      }} onClick={handlePreviousSong}/>
     {play ? <PlayArrowIcon style={{
        alignSelf: !expandPlayer ? 'center' : 'end',
        justifySelf: 'center',
        fontSize: !expandPlayer ? '3.5rem' : '4.5rem',
        color: 'white'
      }}
      onClick={handlePlay}/>
      :
        <PauseIcon style={{
          alignSelf: !expandPlayer ? 'center' : 'end',
          justifySelf: 'center',
          fontSize: !expandPlayer ? '3.5rem' : '4.5rem',
          color: 'white'
        }}
          onClick={handlePaus}/>}
      <SkipNextIcon style={{
        alignSelf: !expandPlayer ? 'center' : 'end',
        justifySelf: 'center',
        fontSize: !expandPlayer ? '2.5rem' : '3.5rem',
        color: 'white'
      }} onClick={handleNextSong} />
      {!expandPlayer ? <KeyboardArrowUp style={{
        alignSelf: !expandPlayer ? 'center' : 'end',
        justifySelf: 'end',
        fontSize: '2rem',
        color: 'white',
      }} onClick={handleExpandPlayer}/>:
        <KeyboardArrowDown style={{
        alignSelf: !expandPlayer ? 'center' : 'end',
        justifySelf: 'end',
        fontSize: '2rem',
        color: 'white',
      }} onClick={handleMinimizePlayer} />}
    </StyledPlayerWrapper>
  )

  const renderYouTubePlayer = () => (
    <YouTube
      videoId={songs?.currentSong[songs?.currentSong.length === 1 ? 0 : currentIndex].id.videoId}
      onReady={(e) => handleStart(e)}
      opts={opts}
    />
  )


  return (
    <>
      <StyledWrapper>
        <BottomNavigation style={{
          background: 'black',
          display: 'grid'
        }} sx={{ width: '100vw', height: !expandPlayer ? '5.5rem' : '92vh' }}>
          {songs?.currentSong.length && renderTitle()}
          {songs?.currentSong.length && renderYouTubePlayer()}
          {renderIcons()}
          {/* {songs?.currentSong.length && renderYouTubePlayer()} */}
        </BottomNavigation>
      </StyledWrapper>
    </>
  )
}

export default MiniPlayer;