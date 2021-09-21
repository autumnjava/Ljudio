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

  const usernameEl = React.useRef<HTMLInputElement>(null);
  const emailEl = React.useRef<HTMLInputElement>(null);
  const passwordEl = React.useRef<HTMLInputElement>(null);
  const confirmPasswordEl = React.useRef<HTMLInputElement>(null);


  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // for sure shall be better way to do that no?
    const username = usernameEl?.current?.value;
    const email = emailEl?.current?.value;
    const password = passwordEl?.current?.value;
    const confirmPassword = confirmPasswordEl?.current?.value;

    if(!username) {
      console.log('you need to enter username');
      return;
    }
    if(!email) {
      console.log('you need to enter email');
      return;
    }
    if(!password || !confirmPassword) {
      console.log('you need to enter password');
      return;
    }

     if(password !== confirmPassword) { 
      console.log('passwords shall match');
      return;}

      const requestBody = {
        query: `mutation {
          createUser(input: {email: "${email}", password: "${password}", username: "${username}"})
          {
            _id
            email
            username
          }
        }`
      }

      // this can be replaced with AXIOS, which one is better?
      fetch('http://localhost:4000/graphql', {
        method: 'Post',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if(res.status !== 200 && res.status !== 201){
          throw new Error('Failed')
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData)
      })
      .catch(err => {
        console.log(err)
      });
  }


  return (
    <StyledWrapper>
      <StyledForm onSubmit={ (e) => submitHandler(e)}>
    
        <StyledTitle>REGISTER</StyledTitle>
        
        <StyledInputWrapper>
            <StyledLabel>Username</StyledLabel>
          <StyledInput ref={usernameEl}/>
          
          <StyledLabel>Email</StyledLabel>
          <StyledInput ref={emailEl} />
          
          <StyledLabel>Password</StyledLabel>
          <StyledInput ref={passwordEl} />
          
          <StyledLabel>Password</StyledLabel>
          <StyledInput ref={confirmPasswordEl}/>
        </StyledInputWrapper>

        <StyledButton>CREATE ACCOUNT</StyledButton>
        
      </StyledForm>
      </StyledWrapper>
  )
}

export default RegisterPage;