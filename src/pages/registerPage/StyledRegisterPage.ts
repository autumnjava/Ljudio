import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
`

export const StyledWrapper = styled.div`
`;


export const StyledForm = styled.form`
  text-align: center;
  margin: 5rem auto;
`;

export const StyledInput = styled.input`
  text-decoration: none;
  outline: none;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid pink;
   &:focus {
        color: green;
        border-bottom: 1px solid #EF02EB;
    }

`;

export const StyledLabel = styled.p`
  color: #EF02EB;
  opacity: 80%;

`;

export const StyledInputWrapper = styled.div`
  display: block;
`;

export const StyledButton = styled.button`
  text-decoration: none;
  outline: none;
  opacity: 80%;
  margin: 1rem;
  border: none;
  background-color: pink;
  border-radius: 0.2rem;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.15rem;
  &:hover{
    opacity: 100%;
  }
`;
