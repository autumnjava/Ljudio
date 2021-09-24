import React, { useContext, useState } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { useHistory } from "react-router";
import ForgotPasswordModal from "../forgotPasswordModal/ForgotPasswordModal";

import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledButton,
  ErrorMessage,
  SuccessMessage,
  RestorePassword
} from "./StyledLogin";


const Login: React.FC = () => {
    const history = useHistory();
    const { login, errorMsg } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    
    async function loginUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
          }
    
        await login(newUser);
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
      
      {/* {localStorage.getItem('JWT_KEY') && 
      <>
        <SuccessMessage> YOU HAVE SUCCESSFULLY LOGGED IN
            <br /> Gonna redirect you shortly.
        </SuccessMessage>
        </>
      } */}

      <RestorePassword onClick={handleOpen}>Forgot password? click here to reset</RestorePassword>

      <ForgotPasswordModal open={open} handleClose={handleClose} />
      
      </StyledForm>
      </StyledWrapper>
    )
}


export default Login;
