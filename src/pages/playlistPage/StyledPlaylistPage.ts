import styled from "styled-components";

export const StyledPLTitle = styled.p`
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  @media (min-width: 769px) {
    margin-top: 4rem;
    padding: 0 0 10px 20px;
  }
`;

export const StyledButton = styled.button`
  align-self: center;
  justify-self: end;
  height: 2rem;
  width: 8rem;
  padding: 5px;
  border: 1px solid #f50057;
  color: #f50057;
  background: black;
  letter-spacing: 3px;
  border-radius: 3px;
  @media (min-width: 769px) {
    margin-top: 4rem;
  }
`

export const StyledHeadWrapper = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin: 0 auto;
    @media (min-width: 769px) {
    width: 80%;
  }
`