import styled from 'styled-components'

export const StyledForm = styled.form`
  padding: 1rem 0.5rem 1rem 0.5rem;
  display: grid;
  grid-template-columns: 1fr 30%;
  grid-gap: 0.5rem;
  @media (min-width: 769px) {
    width: 80%;
    margin: 3rem auto;
  }
`

export const StyledSearchField = styled.input`
  padding: 0.5rem;
  outline: none;
  border: 1px solid #f50057;
  background: black;
  color: white;
  border-radius: 5px;
`
