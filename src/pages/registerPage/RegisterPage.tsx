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


  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  }


  return (
    <StyledWrapper>
      <StyledForm onSubmit={ (e) => submitHandler(e)}>
    
        <StyledTitle>REGISTER</StyledTitle>
        
        <StyledInputWrapper>
            <StyledLabel>Username</StyledLabel>
          <StyledInput />
          
          <StyledLabel>Email</StyledLabel>
          <StyledInput />
          
          <StyledLabel>Password</StyledLabel>
          <StyledInput />
          
          <StyledLabel>Password</StyledLabel>
            <StyledInput/>
        </StyledInputWrapper>

        <StyledButton>CREATE ACCOUNT</StyledButton>
        
      </StyledForm>
      </StyledWrapper>
  )
}

export default RegisterPage;