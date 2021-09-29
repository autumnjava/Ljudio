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
  }

  const handlePlay = async () => {
    if (eventYoutube) {
      eventYoutube.target.playVideo();
      setPlay(false)
    }
    return;
  }

  const handlePaus = () => {
    eventYoutube.target.pauseVideo();
    setPlay(true)
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
  }, [songs.currentSong, currentIndex])

  const handleCurrentTime = () => {
    setCurrentTime(eventYoutube?.target.getCurrentTime() * 1000);
  }

  const handleState = (event: any) => {
    if (eventYoutube?.target.getPlayerState() === -1) {handlePlay()}
    if(eventYoutube?.target.getPlayerState() === 1) {
      setCurrentTime(eventYoutube.target.getCurrentTime() * 1000)
      const intervalId = window.setInterval(() => {
        handleCurrentTime();
          if (eventYoutube?.target.getPlayerState() === 2) {
           clearInterval(intervalId);
          }
      }, 1000);
    }
  }

  const renderYouTubePlayer = () => (
    <div>
      <StyledYouTubeWrapper show={expandPlayer}>
      <StyledVideoWrapper show={!toggleVideo}>
          <YouTube
            videoId={songs?.currentSong[songs?.currentSong.length === 1 ? 0 : currentIndex].videoId}
            opts={{playerVars: {controls: 0,showinfo: 0}}}
            onReady={(e) => handleStart(e)}
            onStateChange={handleState}
        />
      </StyledVideoWrapper>
      </StyledYouTubeWrapper>  
      {handleToggleVideoToPicture()}
    </div>
  )

  const renderSlider = () => (
    <StyledSliderWrapper>
      <Sliders
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        duration={songs?.currentSong[songs?.currentSong.length === 1 ? 0 : currentIndex].duration}
        youtubeEvent={eventYoutube}
      />
    </StyledSliderWrapper>
  )

  return (
    <>
      <StyledWrapper expand={expandPlayer}>
        <StyledPlayer expand={expandPlayer}>
          {songs?.currentSong.length ? renderTitle(songs, currentIndex, expandPlayer, setToggleVideo, setExpandPlayer, eventYoutube) : ''}
          {songs?.currentSong.length ? renderYouTubePlayer() : ''}
          {expandPlayer && songs?.currentSong.length && renderSlider()}
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