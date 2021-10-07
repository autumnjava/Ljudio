import styled from 'styled-components';

export const StyledModal = styled.div`
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  outline: none;
  transform: translate(-50%, -50%);
  background: black;
  border: 1px solid #EF02EB;
  box-shadow: 24;
    @media (min-width: 769px) {
  width: 30%;
}
`

export const StyledHeader = styled.p`
  letter-spacing: 3px;
  text-transform: uppercase;
`

export const StyledButtonWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
`

export const StyledButton = styled.button`
  padding: 1rem;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #EF02EB;
  background: black;
  border: 1px solid #EF02EB;
  cursor: pointer;
  &:hover{
      border: 1px solid black;
    background: #EF02EB;
    color: black;
  }
`