import React, { useRef, useState } from "react";
import {
  StyledTitle,
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledButton
} from "./StyledRegisterPage";


const RegisterPage: React.FC = () => {

  const username = useRef<any>();
  const email = useRef<any>();
  const password = useRef<any>();
  const confirmPassword = useRef<any>();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value
    }

     // Här skickar vi user-objektet till backend för att skapa user:n.
      console.log(user)
  }


  return (
    <StyledWrapper>
      <StyledForm onSubmit={ (e) => submitHandler(e)}>
    
        <StyledTitle>REGISTER</StyledTitle>
        
        <StyledInputWrapper>
            <StyledLabel>Username</StyledLabel>
          <StyledInput ref={username}/>
          
          <StyledLabel>Email</StyledLabel>
          <StyledInput ref={email} />
          
          <StyledLabel>Password</StyledLabel>
          <StyledInput ref={password} />
          
          <StyledLabel>Password</StyledLabel>
          <StyledInput ref={confirmPassword}/>
        </StyledInputWrapper>

        <StyledButton>CREATE ACCOUNT</StyledButton>
        
      </StyledForm>
      </StyledWrapper>
  )
}

export default RegisterPage;