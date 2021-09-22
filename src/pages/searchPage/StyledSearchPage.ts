import styled from 'styled-components';

export const StyledWrapper = styled.div`
   padding: 0.5rem;
   @media (min-width: 769px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const StyledSongWrapper = styled.div`
  display: grid;
  grid-template-columns: 4.5rem 1fr 2rem 2rem;
  border-bottom: 1px solid #9C27B0;
  @media (min-width: 769px) {
   &:hover{
     background:#F5F5F5;
     cursor: pointer;
   }
  }
`

export const StyledSongs = styled.p`
  margin: 0;
  padding: 1rem;   
`

export const StyledSongImg = styled.img`
  height: 7vh;
  align-self: center;
`