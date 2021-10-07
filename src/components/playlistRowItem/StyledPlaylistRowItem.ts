import styled from "styled-components";

export const StyledRowWrapper = styled.div`

padding: 0;
width: 100%;
margin: 0 auto;
  @media (min-width: 769px) {
    width: 80%;
    &:hover{
      cursor: pointer;
      background: #141414;

    }
  }
`;

export const StyledSongImage = styled.img`
  width: 5rem;
  padding: 1rem;
`;

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr 3rem 3rem;
`;

export const StyledDuration = styled.p`
  margin: 0;
  padding-top: 2.5rem;
`;


export const StyledSongTitle = styled.p`
margin: 0;
  padding-top: 1.1rem;
`;

export const StyledRemoveWrapper = styled.span`
  margin: 0;
  padding-top: 2.3rem;
  padding-left: 1rem;
  color: grey;
  &:hover{
    color: black;
  }
`;