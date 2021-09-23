import React, { useContext, useState } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { useHistory } from "react-router";
import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledButton,
  ErrorMessage,
  SuccessMessage
} from "./StyledLogin";


const Login: React.FC = () => {
    const history = useHistory();
    const { login, errorMsg, logout, userId } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
          }
    
        await login(newUser);
        // if(localStorage.getItem('JWT_KEY')  && userId) { history.push("/home") }
    }


    const logoutHandler = () => {
        history.push("/")
        logout();
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
        {errorMsg && <div><ErrorMessage>Bad credentials.</ErrorMessage></div>}

        <StyledButton type="submit">Login</StyledButton>
        <StyledButton onClick={() => history.push("/register")}>Create Account</StyledButton>
      
      {localStorage.getItem('JWT_KEY') && 
      <>
        <SuccessMessage> YOU HAVE SUCCESSFULLY LOGGED IN BRO 
            <br /> Gonna redirect you shortly.
        </SuccessMessage>
        <StyledButton onClick={logoutHandler}>Logout</StyledButton>
        </>
      }
      
      </StyledForm>
      </StyledWrapper>
    )
}


export default Login;
