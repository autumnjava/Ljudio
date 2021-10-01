import { useHistory } from "react-router";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  StyledWrapper,
  StyledDeleteBtn,
  StyledItemDiv,
  StyledImg,
  StyledListTitle
} from "./StyledMyDjRoomItem"

const MyDjRoomItem = () => {

  const history = useHistory();

  return (
    <StyledWrapper>
      <StyledDeleteBtn><HighlightOffIcon/></StyledDeleteBtn>
          
      <StyledItemDiv onClick={() => history.push("/djroom/" + 5)}>
        <div>
          {/* Logik för om rummet ej har bild visa default logo, annars visa bild */}
          <StyledImg src="https://i.postimg.cc/nVmnQDCz/analyze-sound-wave-music-512-362.png" alt="" />
        </div>
        <StyledListTitle>Dj Room Title</StyledListTitle>
        </StyledItemDiv>
    </StyledWrapper>
  );
  
}

export default MyDjRoomItem;