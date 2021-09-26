import { useState, useContext, useEffect } from "react";
import SearchField from "../../components/searchField/SearchField";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";
import DialogModal from '../../components/dialog/DialogModal';
import {
  StyledWrapper,
  StyledSongs,
  StyledSongWrapper,
  StyledSongImg
} from './StyledSearchPage'

interface SongProps {
  name: string,
  videoId: string,
  duration: number,
  imgUrl: string
}

interface Playlist{
  name: string;
  id: string;
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

  const handleAddToPlaylist = (song: SongProps, playlist: Playlist) => {
    addSongToPlaylist(playlist.name, song);
  }

  const printOutYoutubeContent = () => (
    <StyledWrapper>
      {content.map((song: SongProps, index: number) => (
        <div key={index}>
          {index <= amountOfSearchResult && song.videoId !== undefined && <StyledSongWrapper>
            <StyledSongImg onClick={() => handleSong(song)} src={song.imgUrl} alt="" />
            <StyledSongs onClick={() => handleSong(song)}>{song.name}</StyledSongs>
            <PlaylistAddIcon onClick={() => setOpen(!open)} style={{ alignSelf: 'center' }} />
            <PlaylistPlayIcon onClick={() => handleQue(song)} style={{ alignSelf: 'center' }} />
            <DialogModal
              open={open}
              setOpen={setOpen}
              playlists={playlists}
              song={song}
              handleAddToPlaylist={handleAddToPlaylist}
            />
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