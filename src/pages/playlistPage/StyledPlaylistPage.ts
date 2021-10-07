import styled from "styled-components";

export const StyledWrapper = styled.div`
    @media (min-width: 769px) {
    width: 80%;
    margin: 1rem auto;
  }
`

export const StyledPLTitle = styled.p`
  align-self: center;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  width: 100%;
  @media (min-width: 769px) {
    margin-top: 4rem;
    margin-bottom: 0;
    padding: 0 0 0 20px;
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
  margin-bottom: 1rem;
`