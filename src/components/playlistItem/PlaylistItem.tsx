import {StyledItemDiv, StyledImg, StyledPlaylistWrapper, StyledListTitle } from "./StyledPlaylistItem";



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PlaylistItem = ({data}: any) => {
  return (
    <>
      <StyledPlaylistWrapper>

        

      <StyledItemDiv>
        <div>
          <StyledImg src={data.img} alt="" />
        </div>
        <StyledListTitle>{data.title}</StyledListTitle>
        </StyledItemDiv>

        </StyledPlaylistWrapper>
    </>
  );
}

export default PlaylistItem;