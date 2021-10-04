import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
`

export const StyledAddItem = styled.div`
  border: 1px solid #D96CFB;
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
  margin-top: 12px;
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

export const StyledContentWrapper = styled.div`
  @media (min-width: 769px) {
    margin: 100px auto;
    width: 80%;
  }
`;

export const StyledWrapper = styled.div`

`;

export const StyledAddIcon = styled.span`
  font-size: 3.8rem;
  margin: 3em 1rem 2rem 2.5rem;
  padding: 0;
`;

export const StyledListTitle = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  text-decoration: none;
  border-bottom: 1px solid grey;
  background: transparent;
  font-size: 16px;
  color: black;
`;

export const StyledAddBtn = styled.button`
  outline: none;
  border: none;
  color: black;
  background: transparent;
  font-size: 15px;
  cursor: pointer;
  &:hover{
    color: green;
  }
`;

export const StyledUndo = styled.span`
  color: grey;
  cursor: pointer;
  &:hover{
    color: white;
  }
`;