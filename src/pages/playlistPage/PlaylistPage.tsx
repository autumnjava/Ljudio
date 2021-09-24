import { StyledPLTitle } from "./StyledPlaylistPage";
import { useParams } from "react-router";
import PlaylistRowItem from "../../components/playlistRowItem/PlaylistRowItem";
const PlaylistPage = () => {

  const { id }: any = useParams();
  
  return (
    <>


      <StyledPLTitle>My Playlist 1</StyledPLTitle>
      <PlaylistRowItem/>
    </>
  )
}

export default PlaylistPage;