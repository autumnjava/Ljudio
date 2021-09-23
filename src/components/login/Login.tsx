import React, { useContext, useState } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
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
} from "./StyledLogin";


const Login: React.FC = () => {
    const history = useHistory();
    const { login, errorMsg, logout, token } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
          }
    
        await login(newUser);
        history.push("/home")

    }

    return (
        

 <StyledWrapper>
      <StyledForm onSubmit={ (e) => loginUser(e)}>
        <StyledInputWrapper>
          
          <StyledLabel>Email</StyledLabel>
          <StyledInput required value={email}
                onChange={(e) => setEmail(e.target.value)} />
          
          <StyledLabel>Password</StyledLabel>
          <StyledInput type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)} />

        </StyledInputWrapper>

        <StyledButton type="submit">Login</StyledButton>
        {errorMsg && <ErrorMessage>Bad credentials.</ErrorMessage>}

        <StyledButton onClick={() => history.push("/register")}>Create Account</StyledButton>
      </StyledForm>
      
      <h2>TEST:</h2>
      {token && 
      <> <StyledTitle>You are logged in bro.</StyledTitle>
        <StyledButton onClick={() => logout()}>Logout</StyledButton>
        </>
      }
      

      </StyledWrapper>
    )
}


export default Login;
