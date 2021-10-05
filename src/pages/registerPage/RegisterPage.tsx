import React, { useContext, useState } from "react";
import { UserContext } from '../../contexts/usersContext/UserContextProvider'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router";

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
  const [error, setError] = useState(false);
  const history = useHistory();

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
    response && history.push('/');
    !response && setError(true);
  }


  return (
    <StyledWrapper>
      <ArrowBackIcon onClick={() => history.push('/')} style={{padding: '1rem', cursor: 'pointer'}}/>
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

          {error && <ErrorMessage>Choose another email/username.</ErrorMessage>}

        </StyledInputWrapper>

        <StyledButton type="submit">CREATE ACCOUNT</StyledButton>

        
      </StyledForm>
      </StyledWrapper>
  )
}

export default RegisterPage;