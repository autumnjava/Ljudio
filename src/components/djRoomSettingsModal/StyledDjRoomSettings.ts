import styled from 'styled-components';

export const StyledTitle = styled.p`
  text-transform: uppercase;
  color: white;
  letter-spacing: 3px;
  margin-top: 0;
  font-size: 1.3rem;
`

export const StyledText = styled.p`
  color: white;
  letter-spacing: 2px;
  font-size: 1rem;
  padding: 0.5rem;
`

export const StyledInput = styled.input`
  background: black;
  color: white;
  text-decoration: none;
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
  font-size: 1rem;
`

export const StyledEditWrapper = styled.div`
display: grid;
grid-template-columns: 1rem 8rem;
grid-gap: 1rem;
`

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

export const StyledWarrningText = styled.p`
  margin-top: 0;
  padding-top: 0;
  color: red;
  letter-spacing: 2px;
  font-size: 1rem;
  padding: 0.5rem;
`