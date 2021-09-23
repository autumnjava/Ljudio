import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import { StyledTitle, StyledWrapper } from "./StyledMyPlaylistPage";

const MyPlaylistsPage = () => {
  return (
    <StyledWrapper>
      <StyledTitle>MyPlaylist</StyledTitle>

      <PlaylistItem/>

    </StyledWrapper>
  )
}

export default MyPlaylistsPage;