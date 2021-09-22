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

  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);


  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     if(password?.current?.value !== confirmPassword?.current?.value) { 
      console.log('passwords shall match');
      return;}


      const user = {
        username: username?.current?.value,
        email: email?.current?.value,
        password: password?.current?.value
      }

      // setUser(user);

      
  }


  return (
    <StyledWrapper>
      <StyledForm onSubmit={ (e) => submitHandler(e)}>
    
        <StyledTitle>REGISTER</StyledTitle>
        
        <StyledInputWrapper>
            <StyledLabel>Username</StyledLabel>
          <StyledInput required ref={username}/>
          
          <StyledLabel>Email</StyledLabel>
          <StyledInput required ref={email} />
          
          <StyledLabel>Password</StyledLabel>
          <StyledInput required ref={password} />
          
          <StyledLabel>Password</StyledLabel>
          <StyledInput required ref={confirmPassword}/>
        </StyledInputWrapper>

        <StyledButton>CREATE ACCOUNT</StyledButton>
        
      </StyledForm>
      </StyledWrapper>
  )
}

export default RegisterPage;