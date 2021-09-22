import React from "react";
import CreateIcon from '@material-ui/icons/Create';

import {
  StyledWrapper,
  StyledName,
  StyledNameDiv,
  StyledTitleDiv
} from "./StyledProfilePage";


const ProfilePage: React.FC = () => {



  return (
    <StyledWrapper>
      <StyledTitleDiv>
        <p>My Profile</p>
      </StyledTitleDiv>
      <StyledNameDiv>
      <CreateIcon fontSize="small" /><StyledName>Username</StyledName>
      </StyledNameDiv>


    </StyledWrapper>

  );
}

export default ProfilePage;