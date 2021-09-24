import { useState, useContext } from "react";
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";
import SearchField from "../../components/searchField/SearchField";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
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

const SearchPage = () => {

  const [content, setContent] = useState<any>('');
  const [amountOfSearchResult, setAmountOfSearchResult] = useState(2);
  const [showMore, setShowMore] = useState(false);
  const songs = useContext(PlaylistContext);

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
    songs?.setCurrentSong([song]);
  }

  const handleQue = (song: SongProps) => {
    songs?.setCurrentSong([...songs.currentSong, song])
  }

  const handleAddToPlaylist = (song: SongProps) => {
    // function to add song to playlist..
  }
  
  const printOutYoutubeContent = () => (
    <StyledWrapper>
      {content.map((song: any, index: number) => (
        <div key={index}>
          {index <= amountOfSearchResult && song.videoId !== undefined && <StyledSongWrapper>
            <StyledSongImg onClick={() => handleSong(song)} src={song.imgUrl} alt="" />
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