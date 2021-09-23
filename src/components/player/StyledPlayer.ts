import styled from 'styled-components'

interface playerProps {
  expanded: boolean
}

interface videoProps {
  show: boolean
}

export const StyledWrapper = styled.div`
  z-index: 100;
  top: auto;
  bottom: 3.5rem;
  position: fixed;
  border-top: 1px solid grey;
`;

export const StyledPlayerWrapper = styled.div<playerProps>`
  width: 100vw;
  display: grid;
  grid-template-columns: ${props => props.expanded ? '1fr 1fr 1fr' : '1fr 7rem 1fr'};
  grid-template-rows: ${props => props.expanded ? '1fr 1fr' : '1fr 1fr'};
`

export const StyledSongTitle = styled.p`
  padding-top: 4px;
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

export const StyledYouTubeWrapper = styled.div<videoProps>`
  display: ${props => props.show ? 'block' : 'none'};
  width: 100vw;
`

export const StyledVideoWrapper = styled.div<videoProps>`
  display: ${props => props.show ? 'block' : 'none'};
  display: flex;
  justify-content: center;
`

export const StyledImg = styled.img`
  display: block;
  width: 80vw;
  height: 42.5vh;
  object-fit: contain;
  margin: 0 auto;
    @media (min-width: 769px) {
      height: 36vh;
  }
`