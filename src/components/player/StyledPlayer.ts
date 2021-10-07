import styled from 'styled-components'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ShareIcon from '@material-ui/icons/Share';

interface PlayerProps {
  expanded: boolean
}

interface VideoProps {
  show: boolean
}

interface ExpandPlayer {
  expand: boolean
}

interface WrapperProps {
  expand: boolean,
  inDjRoom: boolean,
  iAm: boolean | null
}

interface IconProps {
  expandPlayer: boolean
}

export const StyledPlayer = styled.div<ExpandPlayer>`
  background: black;
  width: 100vw;
  display: ${props => props.expand ? 'grid' : ''};
  grid-template-rows: ${props => props.expand ? '6rem 53% 4rem 7rem' : ''};
  height: ${props => props.expand ? '93.5vh' : '5rem'};
  @media (min-width: 769px) {
    grid-template-rows: ${props => props.expand ? '10% 61% 4rem 7%' : ''};
  }
`

export const StyledWrapper = styled.div<WrapperProps>`
  display: ${props => props.iAm === false && 'none'};
  z-index: 100;
  top: auto;
  bottom: ${props => props.inDjRoom ? '0' : '3.5rem'};
  position: fixed;
  @media (min-width: 769px) {
    bottom: 0;
  }
`;

export const StyledPlayerWrapper = styled.div<PlayerProps>`
  width: 100vw;
  display: grid;
  grid-template-columns: ${props => props.expanded ? '1fr 1fr 1fr' : '1fr 7rem 1fr'};
  grid-template-rows: ${props => props.expanded ? '1fr 1fr 1fr' : '1fr '};
`

export const StyledSongTitle = styled.p<ExpandPlayer>`
  padding-top: ${props => props.expand ? '1rem' : '4px'};
  font-size: ${props => props.expand ? '1.5rem' : ''};
  display: inline;
  color: white;
  width: 85vw;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
`

export const StyledTitleWrapper = styled.div`
  height: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const StyledYouTubeWrapper = styled.div<VideoProps>`
  display: ${props => props.show ? 'block' : 'none'};
  width: 100vw;
`

export const StyledVideoWrapper = styled.div<VideoProps>`
 width: 100vw;
  display: ${props => props.show ? 'block' : 'none'};
  display: flex;
  justify-content: center;
  @media (min-width: 769px) {
    margin-top: 3%;
  } 
`

export const StyledImg = styled.img`
  display: block;
  width: 80vw;
  height: 50.2vh;
  margin-bottom: 3rem;
  object-fit: contain;
  margin: 0 auto;
    @media (min-width: 769px) {
      height: 42.5vh;
  }
`

export const StyledControllerWrapper = styled.div<ExpandPlayer>`
  grid-row: ${props => props.expand ? '3' : ''};
`

export const StyledSliderWrapper = styled.div`
  justify-self: center;
`

export const StyledPlayIcon = styled(PlayArrowIcon)<IconProps>`
  align-self: ${props => !props.expandPlayer ? 'center' : 'start'};
  justify-self: center;
  font-size: ${props => !props.expandPlayer ? '3.5rem' : '4.5rem'} !important;
  color: white;
  cursor: pointer;
`

export const StyledPausIcon = styled(PauseIcon)<IconProps>`
  align-self: ${props => !props.expandPlayer ? 'center' : 'start'};
  justify-self: center;
  font-size: ${props => !props.expandPlayer ? '3.5rem' : '4.5rem'} !important;
  color: 'white';
  cursor: pointer;
`

export const StyledNextIcon = styled(SkipNextIcon)<IconProps>`
  align-self: ${props => !props.expandPlayer ? 'center' : 'start'};
  justify-self: start;
  font-size: ${props => !props.expandPlayer ? '2.5rem' : '4.5rem'} !important;
  color: white;
  cursor: pointer;
`

export const StyledPreviousIcon = styled(SkipPreviousIcon)<IconProps>`
  align-self: ${props => !props.expandPlayer ? 'center' : 'start'};
  justify-self: end;
  font-size: ${props => !props.expandPlayer ? '2.5rem' : '4.5rem'} !important;
  color: white;
  cursor: pointer;
`

export const StyledKeyDownIcon = styled(KeyboardArrowDown)<IconProps>`
  display: inline;
  padding-top: 0.5rem;
  align-self: ${props => !props.expandPlayer ? 'center' : 'start'}; 
  justify-self: end;
  font-size: 2rem !important;
  color: white;
  margin-left: 6px;
  cursor: pointer;
`
export const StyledKeyUpIcon = styled(KeyboardArrowUp)<IconProps>`
  align-self: ${props => !props.expandPlayer ? 'center' : 'start'};
  justify-self: end;
  font-size: 2rem !important;
  color: white;
  cursor: pointer;
`
export const StyledVolumeOffIcon = styled(VolumeOffIcon)`
  align-self: center;
  justify-self: center;
  color: white;
  cursor: pointer;
  color: rgb(245, 0, 87)
`

export const StyledVolumeUpIcon = styled(VolumeUpIcon)`
  align-self: center;
  justify-self: center;
  color: white;
  cursor: pointer;
`

export const StyledAddIcon = styled(PlaylistAddIcon)`
  align-self: center;
  justify-self: start;
  color: white;
  padding-left: 1rem;
  cursor: pointer;
`

export const StyledShareIcon = styled(ShareIcon)`
  display: inline;
  cursor: pointer;
  &:hover{
    color:green;    
  }
`