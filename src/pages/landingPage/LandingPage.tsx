import { StyledTitle, StyledVideo } from "./StyledLandingPage";
import Login from "../../components/login/Login";
import video from "./videos/video4k.mp4";


const LandingPage: React.FC = () => {
  return (
    <>
      <StyledTitle>LANDING PAGE</StyledTitle>
      <StyledVideo autoPlay loop muted src={video}></StyledVideo>
      {/* <Login/> */}
    </>
  )
}

export default LandingPage;