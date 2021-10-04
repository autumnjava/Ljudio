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
    const { login } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const [loginErrorMsg, setLoginErrorMsg] = useState(false);


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    async function loginUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
          }
    
        const response = await login(newUser); // either true (success) or false (failed to login)
        if(response){
          setLoginErrorMsg(false);
          history.push('/home');
          window.location.reload();
        
        } else {
          setLoginErrorMsg(true);
          return;
        }
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
        
        {loginErrorMsg && <div><ErrorMessage>Bad credentials.</ErrorMessage></div>}

        <StyledButton type="submit">Login</StyledButton>
        <StyledButton onClick={() => history.push("/register")}>Create Account</StyledButton>

      <RestorePassword onClick={handleOpen}>Forgot password? click here to reset</RestorePassword>

      <ForgotPasswordModal open={open} handleClose={handleClose} />
      
      </StyledForm>
      </StyledWrapper>
    )
}


export default Login;
