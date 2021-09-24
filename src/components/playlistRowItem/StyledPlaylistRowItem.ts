import styled from "styled-components";

export const StyledRowWrapper = styled.div`

`;

export const StyledSongImage = styled.img`
  width: 5rem;
  padding: 1rem;
`;

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr 3rem;
  border-bottom: 1px solid grey;
  &:first-child{
    border-top: 1px solid grey;
  }
`;

export const StyledDuration = styled.p`
  margin: 0;
  padding-top: 2.5rem;
`;


export const StyledSongTitle = styled.p`
margin: 0;
  padding-top: 1.1rem;
`;