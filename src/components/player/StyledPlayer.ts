import styled from 'styled-components'

interface PlayerProps {
  expanded: boolean
}

interface VideoProps {
  show: boolean
}

interface ExpandPlayer {
  expand: boolean
}

export const StyledPlayer = styled.div<ExpandPlayer>`
  background: black;
  width: 100vw;
  display: ${props => props.expand ? 'grid' : ''};
  grid-template-rows: ${props => props.expand ? '8rem 21rem 2rem 7rem' : ''};
  height: ${props => props.expand ? '93.5vh' : '5rem'};
  @media (min-width: 769px) {
    grid-template-rows: ${props => props.expand ? '10% 70% 7%' : ''};
  }
`

export const StyledWrapper = styled.div<ExpandPlayer>`
  z-index: 100;
  top: auto;
  bottom: 3.5rem;
  position: fixed;
  border-top: 1px solid grey;
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
  grid-template-columns: 1fr 2rem;
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
    margin-top: 7%;
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