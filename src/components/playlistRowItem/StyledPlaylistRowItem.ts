import styled from "styled-components";

export const StyledRowWrapper = styled.div`
 &:last-child{
    margin-bottom: 140px;
  }
  @media (min-width: 769px) {
    &:hover{
      cursor: pointer;
      background: #ECECEC;
    }
    &:last-child{
    margin-bottom: 80px;
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