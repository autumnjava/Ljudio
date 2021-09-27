import { useContext, useEffect, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import YouTube from 'react-youtube';
import {
  StyledWrapper,
  StyledPlayerWrapper,
  StyledSongTitle,
  StyledTitleWrapper,
  StyledVideoWrapper,
  StyledImg,
  StyledYouTubeWrapper,
  StyledPlayer,
  StyledSliderWrapper
} from './StyledPlayer'
import Sliders from '../slider/Slider'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import ReplayIcon from '@material-ui/icons/Replay';

const MiniPlayer = () => {

  const playerDefaultOpts = {
    height: '0',
    width: '0',
  }

  const [play, setPlay] = useState(true);
  const songs = useContext(PlaylistContext);
  const [eventYoutube, setEventYoutube] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [expandPlayer, setExpandPlayer] = useState<boolean>(false);
  const [toggleVideo, setToggleVideo] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(false)
  
  useEffect(() => {
    console.log(eventYoutube?.target.getCurrentTime());
  }, [eventYoutube?.target])

  const handleStart = (event: any) => {
    setEventYoutube(event)
    event.target.playVideo();
    setPlay(false)
  }

  const handlePlay = () => {
    if (eventYoutube) {
      eventYoutube.target.playVideo();
      setPlay(!play)
    }
    return;
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
    setExpandPlayer(true);
    eventYoutube.target.setSize(375, 300);
  }

  const handleMinimizePlayer = () => {
    setToggleVideo(false);
    setExpandPlayer(false);
    eventYoutube.target.setSize(0, 0);
  }

  const handleMute = () => {
    setMute(true)
    eventYoutube.target.mute()
  }

  const handleVolume = () => {
    setMute(false)
    eventYoutube.target.unMute()
  }

  useEffect(() => {
    if (eventYoutube) {
      handleStart(eventYoutube)
    }
    return;
  }, [songs, currentIndex])

  const renderTitle = () => (
    <StyledTitleWrapper>
      <StyledSongTitle expand={expandPlayer}>
        {songs?.currentSong[songs?.currentSong.length === 1 ? 0 : currentIndex].name}
      </StyledSongTitle>
      {expandPlayer ? <KeyboardArrowDown style={{
        paddingTop: '0.5rem',
        alignSelf: !expandPlayer ? 'center' : 'start',
        justifySelf: 'end',
        fontSize: '2rem',
        color: 'white',
      }} onClick={handleMinimizePlayer} />
      :
      <KeyboardArrowUp style={{
        alignSelf: !expandPlayer ? 'center' : 'start',
        justifySelf: 'end',
        fontSize: '2rem',
        color: 'white',
      }} onClick={handleExpandPlayer} />
      }
    </StyledTitleWrapper>  
  )

  const renderExpanedPlayerIcons = () => (
    <>
      <FormControlLabel
        onClick={() => setToggleVideo(!toggleVideo)}
        style={{color: 'white'}}
        label='Audio'
        labelPlacement="start"
        control={<Switch style={{ alignSelf: 'start', gridColumn: '1/3' }} />}
      />
      {!mute ? <VolumeOffIcon style={{
        alignSelf: 'center',
        justifySelf: 'center',
        color: 'white'
      }} onClick={handleMute}/>
          :
          <VolumeUpIcon style={{
          alignSelf: 'center',
          justifySelf: 'center',
          color: 'white'
        }} onClick={handleVolume}/> 
      }
      <ReplayIcon style={{
          alignSelf: 'center',
          justifySelf: 'start',
          color: 'white',
          paddingLeft: '1rem'
      }} />
    </>
  )

  const renderIcons = () => (
    <StyledPlayerWrapper expanded={expandPlayer ? true : false}>
      {expandPlayer && renderExpanedPlayerIcons()}
      <SkipPreviousIcon style={{
        alignSelf: !expandPlayer ? 'center' : 'start',
        justifySelf: 'end',
        fontSize: !expandPlayer ? '2.5rem' : '4.5rem',
        color: 'white'
      }} onClick={handlePreviousSong}/>
     {play ? <PlayArrowIcon style={{
        alignSelf: !expandPlayer ? 'center' : 'start',
        justifySelf: 'center',
        fontSize: !expandPlayer ? '3.5rem' : '4.5rem',
        color: 'white'
      }}
      onClick={handlePlay}/>
      :
        <PauseIcon style={{
          alignSelf: !expandPlayer ? 'center' : 'start',
          justifySelf: 'center',
          fontSize: !expandPlayer ? '3.5rem' : '4.5rem',
          color: 'white'
        }}
          onClick={handlePaus}/>}
      <SkipNextIcon style={{
        alignSelf: !expandPlayer ? 'center' : 'start',
        justifySelf: 'start',
        fontSize: !expandPlayer ? '2.5rem' : '4.5rem',
        color: 'white'
      }} onClick={handleNextSong} />
    </StyledPlayerWrapper>
  )

  const handleToggleVideoToPicture = () => {
    if (toggleVideo) {
      eventYoutube.target.setSize(0, 0);
      return <StyledImg src={songs?.currentSong[currentIndex].imgUrl} alt="" />;
    }
    if (!toggleVideo && eventYoutube && expandPlayer) {
      eventYoutube.target.setSize(475, 350);
    }
    return
  }

  const renderYouTubePlayer = () => (
    <div>
      <StyledYouTubeWrapper show={expandPlayer}>
      <StyledVideoWrapper show={!toggleVideo}>
        <YouTube
        videoId={songs?.currentSong[songs?.currentSong.length === 1 ? 0 : currentIndex].videoId}
        onReady={(e) => handleStart(e)}
        opts={playerDefaultOpts}
        />
      </StyledVideoWrapper>
      </StyledYouTubeWrapper>  
      {handleToggleVideoToPicture()}
    </div>
  )

  return (
    <>
      <StyledWrapper expand={expandPlayer}>
        <StyledPlayer expand={expandPlayer}>
          {songs?.currentSong.length && renderTitle()}
          {songs?.currentSong.length && renderYouTubePlayer()}
          {expandPlayer && <StyledSliderWrapper><Sliders width={230} duration={songs?.currentSong[currentIndex].duration}/></StyledSliderWrapper>}
          {renderIcons()}
        </StyledPlayer>
      </StyledWrapper>
    </>
  )
}

export default MiniPlayer;