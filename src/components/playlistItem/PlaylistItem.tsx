import {StyledItemDiv, StyledImg, StyledPlaylistWrapper, StyledListTitle } from "./StyledPlaylistItem";



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PlaylistItem = ({data}: any) => {
  return (
    <>
      <StyledPlaylistWrapper>

        

      <StyledItemDiv>
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