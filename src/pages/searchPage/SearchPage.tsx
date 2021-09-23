import { useState, useContext } from "react";
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";
import SearchField from "../../components/searchField/SearchField";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import youtube from './YoutubeApi';
import {
  StyledWrapper,
  StyledSongs,
  StyledSongWrapper,
  StyledSongImg
} from './StyledSearchPage'

const SearchPage = () => {

  const [content, setContent] = useState<any>('');
  const [amountOfSearchResult, setAmountOfSearchResult] = useState(2);
  const [showMore, setShowMore] = useState(false);
  const songs = useContext(PlaylistContext);

  const handleSearch = (searchWord: string) => {
    fetch('https://yt-music-api.herokuapp.com/api/yt/videos/' + searchWord)
      .then(response => response.json())
      .then(data => setContent(data.content));
  }

  const handleSearchResult = () => {
    !showMore ? setAmountOfSearchResult(content.length) : setAmountOfSearchResult(2);
    setShowMore(!showMore);
  }

  const handleSong = (song: any) => {
    songs?.setCurrentSong([song]);
  }

  const handleQue = (song: any) => {
    songs?.setCurrentSong([...songs.currentSong, song])
  }

  const handleAddToPlaylist = (song: any) => {
    // function to add song to playlist..
  }
  
  const printOutYoutubeContent = () => (
    <StyledWrapper>
      {content.map((song: any, index: number) => (
        <div key={index}>
          {index <= amountOfSearchResult && song.videoId !== undefined && <StyledSongWrapper>
            <StyledSongImg onClick={() => handleSong(song)} src={song.thumbnails.url} alt="" />
            <StyledSongs onClick={() => handleSong(song)}>{song.name}</StyledSongs>
            <PlaylistAddIcon onClick={() => handleAddToPlaylist(song)} style={{ alignSelf: 'center' }} />
            <PlaylistPlayIcon onClick={() => handleQue(song)} style={{ alignSelf: 'center' }}/>
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