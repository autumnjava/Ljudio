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

  console.log('what is data from all dj rooms', data)

  const history = useHistory();

  return (
    <StyledItemWrapper>

      <StyledItemRow onClick={() => history.push("/djroom/" + data._id)}>
        <StyledDjIcon><HeadsetRoundedIcon fontSize="large"/></StyledDjIcon>
        <StyledInfoDiv>
          <p>{data.name}</p>
          <p><StyledDJSpan>DJ: </StyledDJSpan>{data.dj}</p>
        </StyledInfoDiv>
        <StyledAudienceIcon><PersonRoundedIcon color="secondary" /><StyledAudience>{data.userCount}</StyledAudience></StyledAudienceIcon>
        <StyledEnterRoom><ExitToAppRoundedIcon/></StyledEnterRoom>
      </StyledItemRow>
    </StyledItemWrapper>
  );
}

export default DjRoomRowItem;