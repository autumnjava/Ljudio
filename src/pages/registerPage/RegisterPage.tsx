import React, { useContext, useState } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'

import {
  StyledTitle,
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledButton,
  ErrorMessage
} from "./StyledRegisterPage";


const RegisterPage: React.FC = () => {


  const { registerUser, errorMsg } = useContext(UserContext)

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function createNewUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

     if(password!== confirmPassword) { 
      console.log('passwords shall match');
      return;
    }

      const newUser = {
        username: username,
        email: email,
        password: password
      }

    await registerUser(newUser);
  }


  return (
    <StyledWrapper>
      <StyledForm onSubmit={ (e) => createNewUser(e)}>
    
        <StyledTitle>REGISTER</StyledTitle>
        
        <StyledInputWrapper>
            <StyledLabel>Username</StyledLabel>
          <StyledInput required value={username}
                onChange={(e) => setUsername(e.target.value)}/>
          
          <StyledLabel>Email</StyledLabel>
          <StyledInput required value={email}
                onChange={(e) => setEmail(e.target.value)} />
          
          <StyledLabel>Password</StyledLabel>
          <StyledInput type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)} />
          
          <StyledLabel>Please confirm password</StyledLabel>
          <StyledInput type="password"  required value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>

          {errorMsg && <ErrorMessage>Choose another email/username.</ErrorMessage>}

        </StyledInputWrapper>

        <StyledButton type="submit">CREATE ACCOUNT</StyledButton>

        
      </StyledForm>
      </StyledWrapper>
  )
}

export default RegisterPage;