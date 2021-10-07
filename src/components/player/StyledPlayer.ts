import styled from 'styled-components'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

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