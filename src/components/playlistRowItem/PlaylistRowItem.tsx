import {
  StyledRowWrapper,
  StyledSongImage,
  StyledRow,
  StyledSongTitle,
  StyledDuration
} from "./StyledPlaylistRowItem";


const PlaylistRowItem = () => {
  return (
    <StyledRowWrapper>


      <StyledRow>
        <StyledSongImage src="https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42" />
        <StyledSongTitle>Title of the song</StyledSongTitle>
        <StyledDuration>2.55</StyledDuration>
      </StyledRow>
    </StyledRowWrapper>
  );
}

export default PlaylistRowItem;