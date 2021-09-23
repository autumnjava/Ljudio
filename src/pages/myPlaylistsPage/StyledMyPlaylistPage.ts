import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
`

export const StyledAddItem = styled.div`
  border: 1px solid purple;
  width: 7rem;
  height: 6rem;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 0.3rem;
   &:hover{
    color: #D96CFB;
  }
`;

export const StyledAddPlaylistDiv = styled.div`

`;

export const StyledGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.3rem;
  justify-items: center;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  
`;

export const StyledWrapper = styled.div`

`;

export const StyledAddIcon = styled.span`
  font-size: 3.8rem;
  margin: 3rem 1rem 2rem 2.5rem;
  padding: 0;
`;

export const StyledListTitle = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
`;