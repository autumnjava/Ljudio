import styled from 'styled-components'

export const StyledWrapper = styled.div`
  z-index: 100;
  top: auto;
  bottom: 3.5rem;
  position: fixed;
  border-top: 1px solid grey;
`;

export const StyledPlayerWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2rem;
`

export const StyledSongTitle = styled.p`
  display: inline;
  color: white;
  max-width: 85vw;
  margin: 0;
`