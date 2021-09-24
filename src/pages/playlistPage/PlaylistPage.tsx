import { StyledTitle } from "./StyledPlaylistPage";
import { useParams } from "react-router";

const PlaylistPage = () => {

  const { id }: any = useParams();
  
  return (
    <>
      <StyledTitle>Playlist</StyledTitle>


    </>
  )
}

export default PlaylistPage;