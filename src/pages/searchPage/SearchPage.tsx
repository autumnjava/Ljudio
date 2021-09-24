import { useState, useContext, useEffect } from "react";
import SearchField from "../../components/searchField/SearchField";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { UserContext } from "../../contexts/usersContext/UserContextProvider";
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";
import {
  StyledWrapper,
  StyledSongs,
  StyledSongWrapper,
  StyledSongImg
} from './StyledSearchPage'
import { Dialog } from "@mui/material";

interface SongProps {
  name: string,
  videoId: string,
  duration: number,
  imgUrl: string
}

const SearchPage = () => {

  const [content, setContent] = useState<any>('');
  const [amountOfSearchResult, setAmountOfSearchResult] = useState(2);
  const [showMore, setShowMore] = useState(false);
  const { currentSong, setCurrentSong, addSongToPlaylist } = useContext(PlaylistContext);
  const [open, setOpen] = useState(false);
  const { getUserPlaylists } = useContext(PlaylistContext);
  const { playlists } = useContext(PlaylistContext)
  const [userId, setUserId] = useState<string | null>('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(userId);
  }, []);

  useEffect(() => {
    if (userId) {
      myPlaylists();
    }
  }, [!playlists, userId]);

  const myPlaylists = async () => {
    await getUserPlaylists(userId);
  }

  const id = open ? 'simple-popper' : undefined;

  const handleSearch = (searchWord: string) => { 
    fetch('https://yt-music-api.herokuapp.com/api/yt/videos/' + searchWord)
      .then(response => response.json())
      .then(data => setContent(data.content.map((song: any) => {
        return {
          name: song.name,
          videoId: song.videoId,
          duration: song.duration,
          imgUrl: song.thumbnails.url
        }
      })));
  }

  const handleSearchResult = () => {
    !showMore ? setAmountOfSearchResult(content.length) : setAmountOfSearchResult(2);
    setShowMore(!showMore);
  }

  const handleSong = (song: SongProps) => {
    setCurrentSong([song]);
  }

  const handleQue = (song: SongProps) => {
    setCurrentSong([...currentSong.currentSong, song])
  }

  const handleAddToPlaylist = (song: SongProps) => {
    // make dynamic so that the user can get choose which playlist to add a song to
    const playlistId = "614b47f372dc1bfaa3260bfe"
    addSongToPlaylist(playlistId, song);
  }

  const renderDialog = () => (
    <Dialog onClose={() => setOpen(false)} open={open}>
      <DialogTitle>Playlists</DialogTitle>
      <List sx={{ pt: 0 }}>
        {playlists.map((playlist: any) => (
          <ListItem key={playlist.id}>
            {playlist.name}
        </ListItem>
        ))}
      </List>
    </Dialog>
  )
  
  const printOutYoutubeContent = () => (
    <StyledWrapper>
      {content.map((song: any, index: number) => (
        <div key={index}>
          {index <= amountOfSearchResult && song.videoId !== undefined && <StyledSongWrapper>
            <StyledSongImg onClick={() => handleSong(song)} src={song.imgUrl} alt="" />
            <StyledSongs onClick={() => handleSong(song)}>{song.name}</StyledSongs>
            <PlaylistAddIcon onClick={() => setOpen(!open)} style={{ alignSelf: 'center' }} />
            <PlaylistPlayIcon onClick={() => handleQue(song)} style={{ alignSelf: 'center' }} />
            {renderDialog()}
          </StyledSongWrapper>}
        </div>  
      ))}
      {!showMore ? <ExpandMoreIcon onClick={handleSearchResult} fontSize="large" style={{ display: 'block', margin: '1rem auto' }} />
      : <ExpandLessIcon onClick={handleSearchResult} fontSize="large" style={{ display: 'block', margin: '1rem auto' }}/>}
    </StyledWrapper>
  )

  return (
    <>
      <SearchField handleYoutubeSearch={handleSearch} />
      {content && printOutYoutubeContent()}
    </>
  )
}

export default SearchPage;