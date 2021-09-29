import {
  StyledSongTitle,
  StyledTitleWrapper,
  StyledPlayerWrapper
} from './StyledPlayer'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import FormControlLabel from '@mui/material/FormControlLabel';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import ReplayIcon from '@material-ui/icons/Replay';
import Switch from '@mui/material/Switch';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';


const handleMinimizePlayer = (setToggleVideo: any, setExpandPlayer: any, eventYoutube: any) => {
  setToggleVideo(false);
  setExpandPlayer(false);
  eventYoutube.target.setSize(0, 0);
}

const handleExpandPlayer = (setExpandPlayer: any, eventYoutube: any) => {
  setExpandPlayer(true);
  eventYoutube.target.setSize(375, 300);
}

export const renderTitle = (
  songs: any,
  currentIndex: number,
  expandPlayer: boolean,
  setToggleVideo: React.Dispatch<React.SetStateAction<boolean>>,
  setExpandPlayer: React.Dispatch<React.SetStateAction<boolean>>,
  eventYoutube: any
) => (
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
      }} onClick={() => handleMinimizePlayer(setToggleVideo, setExpandPlayer, eventYoutube)} />
      :
      <KeyboardArrowUp style={{
        alignSelf: !expandPlayer ? 'center' : 'start',
        justifySelf: 'end',
        fontSize: '2rem',
        color: 'white',
      }} onClick={() => handleExpandPlayer(setExpandPlayer, eventYoutube)} />
      }
    </StyledTitleWrapper>  
  )


export const renderExpanedPlayerIcons = (
  setToggleVideo: React.Dispatch<React.SetStateAction<boolean>>,
  toggleVideo: boolean,
  mute: boolean,
  handleMute: () => void,
  handleVolume: () => void
) => (
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

export const renderIcons = (
  expandPlayer: boolean,
  handlePreviousSong: () => void,
  play: boolean,
  handlePlay: () => Promise<void>,
  handlePaus: () => void,
  handleNextSong: () => void,
  setToggleVideo: React.Dispatch<React.SetStateAction<boolean>>,
  toggleVideo: boolean,
  mute: boolean,
  handleMute: () => void,
  handleVolume: () => void
  ) => (
      <StyledPlayerWrapper expanded={expandPlayer ? true : false}>
      {expandPlayer && renderExpanedPlayerIcons(setToggleVideo, toggleVideo, mute, handleMute, handleVolume)}
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


