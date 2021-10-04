import styled from 'styled-components';

export const StyledTitle = styled.p`
  text-transform: uppercase;
  color: black;
  letter-spacing: 3px;
  margin-top: 0;
  font-size: 1.3rem;
`

export const StyledText = styled.p`
  color: black;
  letter-spacing: 2px;
  font-size: 1rem;
  padding: 0.5rem;
`

export const StyledInput = styled.input`
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