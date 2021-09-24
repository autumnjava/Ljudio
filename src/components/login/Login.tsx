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

    // const { registerUser, errorMsg } = useContext(UserContext)
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();
        history.push("/home")
    }

    return (
        

 <StyledWrapper>
      <StyledForm onSubmit={ (e) => login(e)}>
        
        <StyledInputWrapper>
          
          <StyledLabel>Email</StyledLabel>
          <StyledInput required value={email}
                onChange={(e) => setEmail(e.target.value)} />
          
          <StyledLabel>Password</StyledLabel>
          <StyledInput type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)} />

          
          {/* {errorMsg && <ErrorMessage>Wrong credentials.</ErrorMessage>} */}

        </StyledInputWrapper>

        <StyledButton type="submit">Login</StyledButton>
        <StyledButton onClick={() => history.push("/register")}>Create Account</StyledButton>
        
      </StyledForm>
      </StyledWrapper>
    )
}


export default Login;