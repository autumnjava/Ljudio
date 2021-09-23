import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
`

export const StyledWrapper = styled.div`
`;

export const ErrorMessage = styled.span`
  display: flex;
  justify-content: center;
  background: red;
  color: white;
  `


export const StyledForm = styled.form`
  text-align: center;
  margin: 2rem auto;
  min-height: 100%;
`;

export const StyledInput = styled.input`
  text-decoration: none;
  outline: none;
  font-size: 25px;
  border: none;
  border-bottom: 1px solid pink;
  opacity: 50%;
  border-radius: 0.5rem;
  padding: 0.2rem;
   &:focus {
        color: #9001C7;
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
  margin: 10px 1px 0 0;
  border: none;
  min-width: 6rem;
  background-color: pink;
  border-radius: 0.2rem;
  font-size: 19px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.15rem;
  padding: 0.5rem;
  cursor: pointer;
  &:hover{
    color: #9001C7;
  }
`;
