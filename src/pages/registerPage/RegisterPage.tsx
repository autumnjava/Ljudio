import React, { useContext, useState } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'

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


  const { registerUser } = useContext(UserContext)

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const [errorMsg, setErrorMsg] = useState(false)


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

    const response = await registerUser(newUser);
    // this does not work at the moment but shall be implemented
    if (response === 'error!') {
      console.log('error response')
      // setErrorMsg(true)
    }
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
        </StyledInputWrapper>

        <StyledButton type="submit">CREATE ACCOUNT</StyledButton>

        
      </StyledForm>
      </StyledWrapper>
  )
}

export default RegisterPage;