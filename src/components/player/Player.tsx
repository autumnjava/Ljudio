import { useContext, useEffect, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import YouTube from 'react-youtube';
import {
  StyledWrapper,
  StyledVideoWrapper,
  StyledImg,
  StyledYouTubeWrapper,
  StyledPlayer,
  StyledSliderWrapper
} from './StyledPlayer'
import Sliders from '../slider/Slider'
import {renderIcons, renderTitle} from './Assets'

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
  const [currentTime, setCurrentTime] = useState<any>(0);
  const [mute, setMute] = useState<boolean>(false)
  
  const handleStart = (event: any) => {
    setEventYoutube(event)
    event.target.playVideo();
    setPlay(false)
  }

  const handlePlay = async () => {
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

  const handleMute = () => {
    setMute(true)
    eventYoutube.target.mute()
  }

  const handleVolume = () => {
    setMute(false)
    eventYoutube.target.unMute()
  }

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

  useEffect(() => {
    if (eventYoutube) {
      handleStart(eventYoutube)
    }
    return;
  }, [songs, currentIndex])

  useEffect(() => {
    setCurrentTime(eventYoutube?.target.getCurrentTime());
  }, [currentTime])
  
  const handleState = (event: any) => {
    if(eventYoutube?.target.getPlayerState() === 1) {
      setCurrentTime(eventYoutube.target.getCurrentTime())
    }
  }

  const renderYouTubePlayer = () => (
    <div>
      <StyledYouTubeWrapper show={expandPlayer}>
      <StyledVideoWrapper show={!toggleVideo}>
        <YouTube
          videoId={songs?.currentSong[songs?.currentSong.length === 1 ? 0 : currentIndex].videoId}
          onReady={(e) => handleStart(e)}
          opts={playerDefaultOpts}
          onStateChange={handleState}
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
          {songs?.currentSong.length && renderTitle(songs, currentIndex, expandPlayer, setToggleVideo, setExpandPlayer, eventYoutube)}
          {songs?.currentSong.length && renderYouTubePlayer()}
          {expandPlayer && <StyledSliderWrapper><Sliders width={230} currentTime={currentTime} duration={songs?.currentSong[currentIndex].duration}/></StyledSliderWrapper>}
          {renderIcons(
            expandPlayer,
            handlePreviousSong,
            play,
            handlePlay,
            handlePaus,
            handleNextSong,
            setToggleVideo,
            toggleVideo,
            mute,
            handleMute,
            handleVolume
          )}
        </StyledPlayer>
      </StyledWrapper>
    </>
  )
}

export default MiniPlayer;