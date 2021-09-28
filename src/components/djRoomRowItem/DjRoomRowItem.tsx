import HeadsetRoundedIcon from '@material-ui/icons/HeadsetRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import {
  StyledItemWrapper,
  StyledItemRow,
  StyledInfoDiv,
  StyledDjIcon
} from "./StyledDjRoomRowItem";

const DjRoomRowItem = () => {
  return (
    <StyledItemWrapper>

      <StyledItemRow>
        <StyledDjIcon><HeadsetRoundedIcon fontSize="large"/></StyledDjIcon>
        <StyledInfoDiv>
          <p>Room Title</p>
          <p><span>DJ:</span> Name </p>
        </StyledInfoDiv>
        <p><PersonRoundedIcon /><span>14</span></p>
        <p><ExitToAppRoundedIcon/></p>
      </StyledItemRow>
    </StyledItemWrapper>
  );
}

export default DjRoomRowItem;