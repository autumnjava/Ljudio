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
import Switch from '@mui/material/Switch';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

interface SongProps {
  name: string,
  videoId: string,
  duration: number,
  imgUrl: string
}

interface Playlist{
  name: string;
  _id: string;
}

interface IconProps{
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
  handleVolume: () => void,
  songs: any,
  currentIndex: number,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setSongToAdd: React.Dispatch<React.SetStateAction<SongProps | null | undefined>>
}

const handleMinimizePlayer = (setToggleVideo: any, setExpandPlayer: any, eventYoutube: any) => {
  setToggleVideo(false);
  setExpandPlayer(false);
  eventYoutube.target.setSize(0, 0);
}

const handleExpandPlayer = (setExpandPlayer: any, eventYoutube: any) => {
  setExpandPlayer(true);
  eventYoutube.target.setSize(375, 300);
}

const handleOpenDialog = (song: SongProps, playlist: Playlist, setOpen: any, setSongToAdd: any) => {
  setOpen(true)
  setSongToAdd(song);
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


export const renderAllIcons = (props: IconProps) => {
  
  const renderExpanedPlayerIcons = () => (
    <>
      <FormControlLabel
        onClick={() => props.setToggleVideo(!props.toggleVideo)}
        style={{color: 'white'}}
        label='Audio'
        labelPlacement="start"
        control={<Switch style={{ alignSelf: 'start', gridColumn: '1/3' }} />}
      />
      {!props.mute ? <VolumeOffIcon style={{
        alignSelf: 'center',
        justifySelf: 'center',
        color: 'white'
      }} onClick={props.handleMute}/>
          :
          <VolumeUpIcon style={{
          alignSelf: 'center',
          justifySelf: 'center',
          color: 'white'
        }} onClick={props.handleVolume}/> 
      }
    <PlaylistAddIcon style={{
      alignSelf: 'center',
      justifySelf: 'start',
      color: 'white',
      paddingLeft: '1rem'
      }} onClick={() => handleOpenDialog(
        props.songs?.currentSong[props.songs?.currentSong.length === 1 ? 0 : props.currentIndex],
        props.songs?.playlists,
        props.setOpen,
        props.setSongToAdd)} />
    </>
  )
  return (
    <StyledPlayerWrapper expanded={props.expandPlayer ? true : false}>
      {props.expandPlayer && renderExpanedPlayerIcons()}
      <SkipPreviousIcon style={{
        alignSelf: !props.expandPlayer ? 'center' : 'start',
        justifySelf: 'end',
        fontSize: !props.expandPlayer ? '2.5rem' : '4.5rem',
        color: 'white'
      }} onClick={props.handlePreviousSong}/>
     {props.play ? <PlayArrowIcon style={{
        alignSelf: !props.expandPlayer ? 'center' : 'start',
        justifySelf: 'center',
        fontSize: !props.expandPlayer ? '3.5rem' : '4.5rem',
        color: 'white'
      }}
      onClick={props.handlePlay}/>
      :
        <PauseIcon style={{
          alignSelf: !props.expandPlayer ? 'center' : 'start',
          justifySelf: 'center',
          fontSize: !props.expandPlayer ? '3.5rem' : '4.5rem',
          color: 'white'
        }}
          onClick={props.handlePaus}/>}
      <SkipNextIcon style={{
        alignSelf: !props.expandPlayer ? 'center' : 'start',
        justifySelf: 'start',
        fontSize: !props.expandPlayer ? '2.5rem' : '4.5rem',
        color: 'white'
      }} onClick={props.handleNextSong} />
    </StyledPlayerWrapper>
  )
}  