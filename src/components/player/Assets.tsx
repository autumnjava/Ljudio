import {
  StyledSongTitle,
  StyledTitleWrapper,
  StyledPlayerWrapper,
  StyledPlayIcon,
  StyledPausIcon,
  StyledNextIcon,
  StyledPreviousIcon,
  StyledKeyDownIcon,
  StyledKeyUpIcon,
  StyledVolumeOffIcon,
  StyledVolumeUpIcon,
  StyledAddIcon,
  StyledShareIcon
} from './StyledPlayer'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ShareIcon from '@material-ui/icons/Share';

interface SongProps {
  title: string,
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
  setSongToAdd: React.Dispatch<React.SetStateAction<SongProps | null | undefined>>,
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

const handleCopy = (id: string, setOpen: any, setContent: any) => {
  setOpen(true);
  setContent('Copied')
  const el = document.createElement("input");
    el.value = `https://www.youtube.com/watch?v=${id}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
}


export const renderTitle = (
  songs: any,
  currentIndex: number,
  expandPlayer: boolean,
  setToggleVideo: React.Dispatch<React.SetStateAction<boolean>>,
  setExpandPlayer: React.Dispatch<React.SetStateAction<boolean>>,
  eventYoutube: any,
  setOpenSnackBar: any,
  setSnackBarContent: any
) => (
    <StyledTitleWrapper>
      <StyledSongTitle expand={expandPlayer}>
        {songs?.currentSong[songs?.currentSong.length === 1 ? 0 : currentIndex].title}
      </StyledSongTitle>
    {expandPlayer ?
      <div>
        <StyledShareIcon onClick={() => handleCopy(songs?.currentSong[songs?.currentSong.length === 1 ? 0 : currentIndex].videoId,
          setOpenSnackBar,
          setSnackBarContent)}/>
        <StyledKeyDownIcon expandPlayer={expandPlayer} onClick={() => handleMinimizePlayer(setToggleVideo, setExpandPlayer, eventYoutube)} />
      </div>  
      :
      <StyledKeyUpIcon expandPlayer={expandPlayer} onClick={() => handleExpandPlayer(setExpandPlayer, eventYoutube)} />
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
      {props.mute ? <StyledVolumeOffIcon onClick={props.handleVolume}/> : <StyledVolumeUpIcon onClick={props.handleMute}/> }
    <StyledAddIcon onClick={() => handleOpenDialog(
        props.songs?.currentSong[props.songs?.currentSong.length === 1 ? 0 : props.currentIndex],
        props.songs?.playlists,
        props.setOpen,
        props.setSongToAdd)} />
    </>
  )
  return (
    <StyledPlayerWrapper expanded={props.expandPlayer ? true : false}>
      {props.expandPlayer && renderExpanedPlayerIcons()}
      <StyledPreviousIcon expandPlayer={props.expandPlayer} onClick={props.handlePreviousSong}/>
      {props.play ? <StyledPlayIcon expandPlayer={props.expandPlayer} onClick={props.handlePlay}/> : <StyledPausIcon expandPlayer={props.expandPlayer} onClick={props.handlePaus}/>}
      <StyledNextIcon expandPlayer={props.expandPlayer} onClick={props.handleNextSong} />
    </StyledPlayerWrapper>
  )
}  