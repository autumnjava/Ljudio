import styled from 'styled-components';

export const StyledWrapper = styled.div`
   padding: 0.5rem;
    &:last-child {
        margin-bottom: 7rem;
    }
   @media (min-width: 769px) {
    width: 80%;
    margin: 0 auto;
  }
`
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

export const StyledCategory = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  margin: 10px;
`;

export const StyledArtistImg = styled.img`
  border-radius: 50%;
`;

export const StyledArtistName = styled.p`
text-align: center;
margin: 0;
`;

export const StyledAvatarDiv = styled.div`
  float: left;
  margin-bottom: 20%;
  cursor: pointer;
  &:hover{
    opacity: 85%;
  }
`;


