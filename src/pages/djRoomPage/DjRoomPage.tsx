import {
  StyledWrapper,
  StyledHead,
  StyledAvatar1,
  StyledInner1,
  StyledName1,
  StyledAvatar2,
  StyledInner2,
  StyledAvatar3,
  StyledInner3,
  StyledAvatar4,
  StyledInner4,
} from "./StyledDjRoomPage";


const DjRoomPage = () => {
  
  return (
  <StyledWrapper>
    <StyledHead>
        <StyledName1>DJ</StyledName1>
    </StyledHead>

    <StyledAvatar1>
      <StyledInner1>
          <StyledName1>
            I.P
        </StyledName1>
      </StyledInner1>
    </StyledAvatar1>
    
    <StyledAvatar2>
      <StyledInner2>
        <StyledName1>
            A.A
        </StyledName1>
      </StyledInner2>
    </StyledAvatar2>

    <StyledAvatar3>
      <StyledInner3>
        <StyledName1>
            O.G
        </StyledName1>
      </StyledInner3>
    </StyledAvatar3>

    <StyledAvatar4>
      <StyledInner4>
          <StyledName1>
            R.S
        </StyledName1>
      </StyledInner4>
    </StyledAvatar4>

  </StyledWrapper>
  );
}

export default DjRoomPage;