import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import { StyledTitle, StyledAddPlaylistDiv, StyledGridDiv, StyledAddItem, StyledWrapper, StyledAddIcon, StyledListTitle} from "./StyledMyPlaylistPage";

interface Props {
  title: string;
  img: string
}

const MyPlaylistsPage: React.FC = () => {

  // Dummy data for testing.
  const MyPlayListDummyData: any = [{
    title: "Playlist 1",
    img: "https://lh3.googleusercontent.com/proxy/LvYaJ0iW--ryeMqEeXWdcTcakspcpdR6c6edde3PgeYDjJhbPBU64jrgDwZj-ERQfoNDVUNaUNspyzRHaKHBfaOrVbk-6FzJ0fyVxxVU4wOnVBPU239daB3XjaIBFUUFEM83YQEZ-E2Q_FbWU7UsNXg"
  },
  {
    title: "Playlist 2",
    img: "https://lh3.googleusercontent.com/proxy/LvYaJ0iW--ryeMqEeXWdcTcakspcpdR6c6edde3PgeYDjJhbPBU64jrgDwZj-ERQfoNDVUNaUNspyzRHaKHBfaOrVbk-6FzJ0fyVxxVU4wOnVBPU239daB3XjaIBFUUFEM83YQEZ-E2Q_FbWU7UsNXg"
    },
  {
    title: "Playlist 3",
    img: "https://lh3.googleusercontent.com/proxy/LvYaJ0iW--ryeMqEeXWdcTcakspcpdR6c6edde3PgeYDjJhbPBU64jrgDwZj-ERQfoNDVUNaUNspyzRHaKHBfaOrVbk-6FzJ0fyVxxVU4wOnVBPU239daB3XjaIBFUUFEM83YQEZ-E2Q_FbWU7UsNXg"
    },
  {
    title: "Playlist 4",
    img: "https://lh3.googleusercontent.com/proxy/LvYaJ0iW--ryeMqEeXWdcTcakspcpdR6c6edde3PgeYDjJhbPBU64jrgDwZj-ERQfoNDVUNaUNspyzRHaKHBfaOrVbk-6FzJ0fyVxxVU4wOnVBPU239daB3XjaIBFUUFEM83YQEZ-E2Q_FbWU7UsNXg"
    }]
  
  
  return (
    <StyledWrapper>
      <StyledTitle>MyPlaylist</StyledTitle>

    <StyledGridDiv>
        
        
          <StyledAddPlaylistDiv>
          <StyledAddItem>
          <StyledAddIcon>+</StyledAddIcon>
          </StyledAddItem>
            <StyledListTitle>Skapa playlist</StyledListTitle>
        </StyledAddPlaylistDiv>
        
        {MyPlayListDummyData.map((data: Props) => {
          return <PlaylistItem key={data.title} data={data}/>
        })}
     </StyledGridDiv>
    </StyledWrapper>
      
  )
}

export default MyPlaylistsPage;