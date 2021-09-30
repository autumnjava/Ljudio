import styled from "styled-components";

export const StyledWrapper = styled.div`

`;

export const StyledTitle = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  margin: 10px 3px 0 10px;
`;


export const StyledNameDiv = styled.div`
  font-size: 40px;
  letter-spacing: 2px;
  margin-top: 10%;
  padding: 0;
`;

export const StyledName = styled.p`
  margin: 0 0 0 10px;
`;

export const StyledMusicDiv = styled.div`

`;

// MUSIC LIST STYLE

export const StyledSongWrapper = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 2rem 2rem;
  @media (min-width: 400px) {
      grid-template-columns: 6rem 1fr 2rem 2rem;
  }
  @media (min-width: 769px) {
  grid-template-columns: 7rem 1fr 2rem 2rem;
   &:hover{
     background:#F5F5F5;
     cursor: pointer;
   }
  }
`

export const StyledSongs = styled.p`
  margin: 0;
  padding: 5%;
  margin-left: 1rem;
  @media (min-width: 769px) {
    padding: 3%;
  }
`

export const StyledSongImg = styled.img`
  padding: 3%;
  height: 7vh;
  align-self: center;
`
