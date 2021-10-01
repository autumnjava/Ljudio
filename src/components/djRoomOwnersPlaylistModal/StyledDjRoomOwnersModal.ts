import styled from 'styled-components';

export const StyledSongWrapper = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  @media (min-width: 400px) {
      grid-template-columns: 6rem 1fr;
  }
  @media (min-width: 769px) {
  grid-template-columns: 7rem 1fr;
   &:hover{
     background:#F5F5F5;
     cursor: pointer;
   }
  }
`

export const StyledSongImg = styled.img`
  padding: 3%;
  height: 7vh;
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