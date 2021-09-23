import { StyledContent, StyledVideo, StyledWrapper, StyledBlurDiv, StyledLogo } from "./StyledLandingPage";
import Login from "../../components/login/Login";
import video from "./videos/video4k.mp4";
import logo from "./videos/logo.png"

const LandingPage: React.FC = () => {
 
  return (
    <StyledWrapper>
      
      <StyledVideo autoPlay loop muted src={video}></StyledVideo>
      <StyledBlurDiv></StyledBlurDiv>
      
      <StyledContent>

      <StyledLogo src={logo} /> 
      <Login/> 
      </StyledContent>

  
    </StyledWrapper>
  )
}

export default LandingPage;