import HeadsetRoundedIcon from '@material-ui/icons/HeadsetRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import {
  StyledItemWrapper,
  StyledItemRow,
  StyledInfoDiv,
  StyledDjIcon,
  StyledAudience,
  StyledAudienceIcon,
  StyledDJSpan,
  StyledRoomTitle,
  StyledRoomDJ,
  StyledEnterRoom
} from "./StyledDjRoomRowItem";

const DjRoomRowItem = () => {
  return (
    <StyledItemWrapper>

      <StyledItemRow>
        <StyledDjIcon><HeadsetRoundedIcon fontSize="large"/></StyledDjIcon>
        <StyledInfoDiv>
          <StyledRoomTitle>Room Title</StyledRoomTitle>
          <StyledRoomDJ><StyledDJSpan>DJ:</StyledDJSpan> Name</StyledRoomDJ>
        </StyledInfoDiv>
        <StyledAudienceIcon><PersonRoundedIcon color="secondary" /><StyledAudience>14</StyledAudience></StyledAudienceIcon>
        <StyledEnterRoom><ExitToAppRoundedIcon/></StyledEnterRoom>
      </StyledItemRow>
    </StyledItemWrapper>
  );
}

export default DjRoomRowItem;