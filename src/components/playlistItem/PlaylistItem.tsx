import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import {
  StyledItemDiv,
  StyledImg,
  StyledPlaylistWrapper,
  StyledListTitle,
  StyledDeleteBtn
} from "./StyledPlaylistItem";



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PlaylistItem = ({ data }: any) => {

  const history = useHistory();
  
  return (
    <>
      <StyledPlaylistWrapper>
       <StyledDeleteBtn onClick={() => data[1](data[0]._id)}><HighlightOffIcon/></StyledDeleteBtn>
          
        <StyledItemDiv onClick={() => history.push("/playlist/" + data[0]._id)}>
        <div>
          <StyledImg src="https://i.postimg.cc/nVmnQDCz/analyze-sound-wave-music-512-362.png" alt="" />
        </div>
        <StyledListTitle>{data[0].name}</StyledListTitle>
        </StyledItemDiv>

        </StyledPlaylistWrapper>
    </>
  );
}

export default PlaylistItem;