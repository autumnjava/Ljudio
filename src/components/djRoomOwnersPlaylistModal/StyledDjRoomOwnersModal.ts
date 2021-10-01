import styled from 'styled-components';

export const StyledTitleWrapper = styled.div`

  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1rem;
`

export const StyledTitle = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: 'white';
`

export const StyledSongWrapper = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr;
  @media (min-width: 400px) {
      grid-template-columns: 3rem 1fr;
  }
  @media (min-width: 769px) {
  grid-template-columns: 3rem 1fr;
   &:hover{
     background:#F5F5F5;
     cursor: pointer;
   }
  }
`

export const StyledSongImg = styled.img`
  padding: 4%;
  height: 4vh;
  align-self: center;
`

export const StyledSongs = styled.p`
  margin: 0;
  padding: 5%;
  margin-left: 1rem;
  @media (min-width: 769px) {
    padding: 3%;
  }
`