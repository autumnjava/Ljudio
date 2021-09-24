import {StyledItemDiv, StyledImg, StyledPlaylistWrapper, StyledListTitle } from "./StyledPlaylistItem";
import { useHistory } from "react-router-dom";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PlaylistItem = ({ data }: any) => {

  const history = useHistory();
  
  return (
    <>
      <StyledPlaylistWrapper>

        

      <StyledItemDiv onClick={() => history.push("/playlist/" + data._id)}>
        <div>
          <StyledImg src="https://i.postimg.cc/nVmnQDCz/analyze-sound-wave-music-512-362.png" alt="" />
        </div>
        <StyledListTitle>{data.name}</StyledListTitle>
        </StyledItemDiv>

        </StyledPlaylistWrapper>
    </>
  );
}

export default PlaylistItem;