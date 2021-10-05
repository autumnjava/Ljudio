import { useHistory } from 'react-router';
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
  StyledEnterRoom
} from "./StyledDjRoomRowItem";

const DjRoomRowItem = ({ data }: any) => {

  const history = useHistory();

  const handleEnterRoom = () => {
    history.push("/djroom/" + data[0]._id)
    data[1](data[0]._id)
  }

  return (
    <StyledItemWrapper>

      <StyledItemRow onClick={handleEnterRoom}>
        <StyledDjIcon><HeadsetRoundedIcon fontSize="large"/></StyledDjIcon>
        <StyledInfoDiv>
          <p>{data[0].name}</p>
          <p><StyledDJSpan>DJ: </StyledDJSpan>{data[0].dj}</p>
        </StyledInfoDiv>
        <StyledAudienceIcon><PersonRoundedIcon color="secondary" /><StyledAudience>{data.userCount}</StyledAudience></StyledAudienceIcon>
        <StyledEnterRoom><ExitToAppRoundedIcon/></StyledEnterRoom>
      </StyledItemRow>
    </StyledItemWrapper>
  );
}

export default DjRoomRowItem;