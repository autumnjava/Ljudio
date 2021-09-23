import styled from 'styled-components'

interface playerProps {
  expanded: boolean
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
  grid-template-columns: ${props => props.expanded ? '1fr 1fr 1fr' : '1fr 1fr 1fr 2rem'};
  grid-template-rows: ${props => props.expanded ? '1fr 1fr' : '1fr'};
`

export const StyledSongTitle = styled.p`
  display: inline;
  color: white;
  max-width: 85vw;
  margin: 0;
`

export const StyledTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem;
`