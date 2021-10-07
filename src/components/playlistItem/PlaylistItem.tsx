import { useHistory } from "react-router-dom";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import HeadphonesIcon from '@material-ui/icons/Headset';

import {
  StyledItemDiv,
  StyledImg,
  StyledPlaylistWrapper,
  StyledListTitle,
  StyledDeleteBtn,
  StyledIconWrapper
} from "./StyledPlaylistItem";
import playlistLogo from "../../pages/landingPage/videos/logo-playlist.png"



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PlaylistItem = ({ data }: any) => {

  const history = useHistory();

  const handleDjroom = () => {
    history.push(`/createDjRoom/${data[0]._id}`);
  }
  
  return (
    <>
      <StyledPlaylistWrapper>
        <StyledIconWrapper>
          <HeadphonesIcon onClick={handleDjroom} style={{color: 'grey', cursor: 'pointer'}}/>
        <StyledDeleteBtn style={{float: 'right'}} onClick={() => data[1](data[0]._id)}><HighlightOffIcon/></StyledDeleteBtn>
        </StyledIconWrapper>
        <StyledItemDiv onClick={() => history.push("/playlist/" + data[0]._id)}>
        <div>
          <StyledImg src={playlistLogo} alt="" />
        </div>
        <StyledListTitle>{data[0].name}</StyledListTitle>
        </StyledItemDiv>

        </StyledPlaylistWrapper>
    </>
  );
}

export default PlaylistItem;