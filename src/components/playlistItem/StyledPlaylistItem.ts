import styled from "styled-components";

export const StyledItemDiv = styled.div`
  margin: 0;
  cursor: pointer;
  &:hover{
    color: #D96CFB;
  }
`;

export const StyledImg = styled.img`
  width: 7rem;
  /* border: 1px solid purple; */
  border-radius: 0.3rem;
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

export const StyledDeleteBtn = styled.button`
  display: grid;
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  cursor: pointer;
  max-width: 1.5rem;
  background: transparent;
  justify-self: end;
  color: grey;
  &:hover{
    color: black;
  }
`;