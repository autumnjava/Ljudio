import { useHistory } from "react-router";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  StyledWrapper,
  StyledItemDiv,
  StyledImg,
  StyledListTitle
} from "./StyledHomeDjRoomItem"

import playlistLogo from "../../pages/landingPage/videos/logo-playlist.png"

const HomeDjRoomItem = ({ data }: any) => {

  const history = useHistory();

  return (
    <StyledWrapper>  
      <StyledItemDiv onClick={() => history.push("/djroom/" + data[0]._id)}>
        <div>
          {/* Logik för om rummet ej har bild visa default logo, annars visa bild */}
          <StyledImg src={playlistLogo} alt="" />
        </div>
        <StyledListTitle>{data[0].name}</StyledListTitle>
        </StyledItemDiv>
    </StyledWrapper>
  );
  
}

export default HomeDjRoomItem;