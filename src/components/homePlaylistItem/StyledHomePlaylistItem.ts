import styled from "styled-components";

export const StyledItemDiv = styled.div`
  margin: 0;
  cursor: pointer;
  &:hover{
    color: #f50057;
  }
`;

export const StyledImg = styled.img`
  width: 7rem;
  border-radius: 0.2rem;
  padding: 0.2rem;
`;

export const StyledPlaylistWrapper = styled.div`
  display: grid;
 
`;

export const StyledListTitle = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const StyledIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`